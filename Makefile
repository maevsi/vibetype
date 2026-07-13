.PHONY: init

init:
	@if [ -d node_modules ]; then echo "Already initialized."; else corepack enable && pnpm install; fi