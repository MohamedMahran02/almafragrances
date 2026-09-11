# Project instructions

## Documentation

- Always use Context7 for library/API documentation, setup steps, configuration, and code generation that depends on external packages.
- Before writing code that uses a framework or library, resolve the relevant library in Context7 and read the docs first.
- Prefer version-specific docs when available.
- When docs and memory conflict, follow Context7 docs.

## GitHub workflow

- Repository: `https://github.com/omarashraaf/almafragrances.git`.
- Use `main` as the shared branch unless the user requests another branch.
- The user wants completed edits committed and pushed to GitHub so a connected Shopify theme receives updates. This is standing authorization to push the requested work.
- Fetch and incorporate remote changes before editing, including changes Shopify may commit. Use fast-forward pulls when possible and preserve existing work when resolving divergence.
- After each completed requested change, run appropriate checks, review the diff, commit the relevant files, and push to `origin/main`. Verify the push and report any blocker.
- Never force-push or discard unrelated changes.
- Use local Git authentication for `omarashraaf`; the Codex GitHub connector may use a different account.
- Keep Shopify theme files in the repository root using Shopify's standard theme directory structure.
