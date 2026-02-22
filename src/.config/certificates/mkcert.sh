#!/bin/sh
set -e

SCRIPT_DIRECTORY=$(dirname "$(readlink -f "$0")")
CERTIFICATE_SUFFIX="-dev"

[ -n "$CI" ] && CERTIFICATE_SUFFIX="-ci"

is_certificate_valid() {
    certificate_path="$1"
    root_ca_path="$(mkcert -CAROOT)/rootCA.pem"

    [ -f "$certificate_path" ] || return 1

    openssl verify -CAfile "$root_ca_path" "$certificate_path" >/dev/null 2>&1 && openssl x509 -checkend 86400 -noout -in "$certificate_path" >/dev/null 2>&1
}

generate_certificate() {
    certificate_name="$1"
    shift
    domains="$*"

    certificate_path="${SCRIPT_DIRECTORY}/${certificate_name}${CERTIFICATE_SUFFIX}.crt"
    key_file_path="${SCRIPT_DIRECTORY}/${certificate_name}${CERTIFICATE_SUFFIX}.key"

    if is_certificate_valid "$certificate_path"; then
        echo "✓ Certificate '${certificate_name}' is valid"
        return 0
    fi

    if [ -f "$certificate_path" ]; then
        echo "✗ Removing outdated certificate: '${certificate_name}'"
        rm -f "$certificate_path" "$key_file_path"
    fi

    echo "→ Generating certificate: '${certificate_name}'"
    # shellcheck disable=SC2086
    mkcert \
        -cert-file "$certificate_path" \
        -key-file "$key_file_path" \
        -ecdsa \
        $domains

    cat "$(mkcert -CAROOT)/rootCA.pem" >> "$certificate_path"

    echo "✓ Certificate generated: '${certificate_name}'"
}

generate_certificate "ssl" "localhost" "app.localhost" "127.0.0.1" "0.0.0.0"
