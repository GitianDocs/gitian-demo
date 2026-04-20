---
title: Documentation Directory
tags: [directory-doc, docs, guides]
---

# docs/

This directory contains the project's documentation guides and file-doc companions.

## Available Guides

| Document | What It Covers |
|----------|---------------|
| [[docs/features]] | Complete feature showcase — callouts, math, Mermaid, code blocks |
| [[docs/architecture]] | Component tree and data flow diagrams |
| [[docs/getting-started]] | Setup instructions with a task list checklist |

## Docs Discovery

Gitian discovers `docs/` and `.docs/` directories at any level in the repository. All discovered directories merge into a single unified view:

```
docs/                Root-level docs directory
docs/docs/           Nested docs (meta-documentation)
examples/docs/       Example file-doc companions
```

> [!tip]
> File-doc companions use the pattern `docs/<filename>.md` — for example, `docs/README.md.md` documents `README.md`.
