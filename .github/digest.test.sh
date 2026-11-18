#!/usr/bin/env bash
# Runs digest.sh against stubbed gh and curl executables, offline and without secrets.
set -euo pipefail
export LC_ALL=C.UTF-8

script=$(realpath "$(dirname "$0")/digest.sh")
cd "$(mktemp -d)"
mkdir bin
export PATH="$PWD/bin:$PATH"
unset ORG SINCE UNTIL
export DISCORD_WEBHOOK_URL=https://discord.example/hook
export ACTIONS_ID_TOKEN_REQUEST_TOKEN=request-secret
export ACTIONS_ID_TOKEN_REQUEST_URL='https://oidc.example/token?a=1'
export ANTHROPIC_FEDERATION_RULE_ID=rule ANTHROPIC_ORGANIZATION_ID=org
export ANTHROPIC_SERVICE_ACCOUNT_ID=svc ANTHROPIC_WORKSPACE_ID=ws

# gh prints the pull request nodes for graphql (as --jq would) and the releases for the REST call.
cat >bin/gh <<'STUB'
#!/usr/bin/env bash
printf '%s\n' "$*" >>gh.args
case "$*" in
  *graphql*) cat nodes.json ;;
  *releases*) cat releases.json ;;
esac
STUB
# curl answers by URL, replies from files, and keeps what it was sent on stdin.
cat >bin/curl <<'STUB'
#!/usr/bin/env bash
printf '%s\n' "$*" >>curl.args
for url; do case "$url" in https://*) break ;; esac; done
case "$*" in *'-d @-'*) cat >"curl.body.${url//[^a-z]/_}" ;; esac
case "$url" in
  *oidc.example*) echo '{"value":"jwt-secret"}' ;;
  */oauth/token) echo '{"access_token":"token-secret"}' ;;
  */v1/messages) cat response.json ;;
esac
STUB
chmod +x bin/gh bin/curl

node() { # title author-type author-login
  jq -nc --arg t "$1" --arg ty "$2" --arg l "$3" '{
    title: $t, body: "body", repository: {name: "app", description: null},
    author: {__typename: $ty, login: $l}, labels: {nodes: []},
    closingIssuesReferences: {nodes: []}}'
}
{
  node 'feat(ui): add a thing' User alice
  node 'fix(security): patch it' User alice
  node 'fix(ui): repair it' User alice
  node 'docs: explain' User alice
  node 'chore(deps): update foo to v5' Bot 'renovate[bot]'
  node 'chore(deps): update bar to v1.2.3' Bot 'renovate[bot]'
  node 'chore(deps): update baz [SECURITY]' Bot 'renovate[bot]'
} >nodes.json
echo '[
  {"tag_name":"v5","published_at":"2026-01-09T00:00:00Z","draft":false,"prerelease":false},
  {"tag_name":"v2","published_at":"2026-01-02T00:00:00Z","draft":false,"prerelease":false},
  {"tag_name":"v3-beta","published_at":"2026-01-03T00:00:00Z","draft":false,"prerelease":true},
  {"tag_name":"v4","published_at":"2026-01-04T00:00:00Z","draft":true,"prerelease":false},
  {"tag_name":"v1","published_at":"2025-12-31T00:00:00Z","draft":false,"prerelease":false}]' >releases.json

check() { # description jq-expression file
  jq -e "$2" "$3" >/dev/null || { echo "$1: $(jq -c . "$3" | head -c 600)"; exit 1; }
}

# Categories, groups and counts, with routine dependency bumps counted but not listed.
SINCE=2026-01-01 UNTIL='2026-01-08 12:00' "$script" collect >context.json
check counts '.counts == {total: 7, product: 2, upkeep: 4, quality: 1,
  by_category: {"product-feature": 1, "security-fix": 1, "product-fix": 1, "quality-and-docs": 1,
                "dependency-major": 1, "dependency-minor": 1, "dependency-security": 1},
  releases: 1}' context.json
check prs '(.prs | length) == 6 and ([.prs[].category] | index("dependency-minor")) == null' context.json
check releases '[.releases[].tag] == ["v2", "v3-beta"]' context.json
check span '.since == "2026-01-01T00:00:00Z" and .until == "2026-01-08T12:00:00Z"' context.json
grep -q 'org:maevsi is:pr is:merged merged:2026-01-01T00:00:00Z..2026-01-08T12:00:00Z' gh.args || { echo 'unexpected search'; cat gh.args; exit 1; }
# Without a span, the last 7 days up to now are collected.
"$script" collect >/dev/null
grep -q "merged:$(date -u -d '7 days ago' +%F)T[0-9:]*Z\.\.$(date -u +%F)T" gh.args || { echo 'unexpected default span'; tail -n 2 gh.args; exit 1; }
if SINCE=bogus "$script" collect >/dev/null 2>&1; then echo 'expected failure on an invalid date'; exit 1; fi
ORG=other "$script" collect >/dev/null
grep -q 'org:other ' gh.args || { echo 'ORG ignored'; exit 1; }

# A quiet time span still yields valid zero counts for the workflow gate.
: >nodes.json
"$script" collect >empty.json
check empty '.counts == {total: 0, product: 0, upkeep: 0, quality: 0, by_category: {}, releases: 0}
  and .prs == [] and .releases == []' empty.json

# The summary reaches stdout only, and a failed run leaks neither it nor the tokens.
summary='Great progress for the team.'
jq -n --arg t "$summary" '{stop_reason: "end_turn", content: [{type: "text", text: $t}]}' >response.json
"$script" summarize <context.json >out.txt 2>err.txt
[ "$(<out.txt)" = "$summary" ] || { echo "unexpected summary: $(<out.txt)"; exit 1; }
grep -q '"claude-sonnet-5-5"' curl.body.https___api_anthropic_com_v__messages || { echo 'no model sent'; exit 1; }
grep -q 'app' curl.body.https___api_anthropic_com_v__messages || { echo 'context not sent'; exit 1; }
# The ::add-mask:: lines carry the tokens by design, so the runner can redact them.
grep -q '^::add-mask::token-secret$' err.txt || { echo 'token not masked'; exit 1; }
if grep -v '^::add-mask::' err.txt | grep -qE "$summary|secret"; then
  echo "stderr leaks: $(<err.txt)"
  exit 1
fi
jq -n --arg t "$summary" '{stop_reason: "max_tokens", content: [{type: "text", text: $t}]}' >response.json
if "$script" summarize <context.json >out.txt 2>err.txt; then
  echo 'expected failure'
  exit 1
fi
[ ! -s out.txt ] || { echo "unexpected stdout: $(<out.txt)"; exit 1; }
grep -q 'unexpected stop reason: max_tokens' err.txt || { echo "no reason: $(<err.txt)"; exit 1; }
! grep -v '^::add-mask::' err.txt | grep -qE "$summary|secret" || { echo "stderr leaks: $(<err.txt)"; exit 1; }

# Links, bare URLs and angle-bracket mentions are stripped, and the description stays within Discord's limit.
{
  printf 'See [the docs](https://evil.example/x) and https://evil.example/y or www.evil.example now <@&123> <b>x</b>.\n'
  printf 'ä%.0s' {1..4100}
} >summary.md
"$script" post context.json summary.md
body=$(ls curl.body.https___discord_example_hook)
check payload '.allowed_mentions == {parse: []} and .username == "Team Software Engineering"
  and (.embeds | length) == 1' "$body"
check text '.embeds[0].description | startswith("See the docs and  or  now  x.") and (contains("evil") | not) and (contains("<") | not)' "$body"
check limit '(.embeds[0].description | length) == 4000' "$body"
check fields '[.embeds[0].fields[] | .value] == ["2 changes", "4 changes", "1 changes", "1", "2", "1"]' "$body"
check footer '.embeds[0].footer.text | startswith("Merged pull requests from 2026-01-01 to 2026-01-08 ")' "$body"

# An unknown subcommand is rejected with a usage hint.
if "$script" bogus 2>err.txt; then echo 'expected failure'; exit 1; fi
grep -q usage err.txt || { echo 'no usage'; exit 1; }

echo ok
