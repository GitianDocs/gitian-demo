---
title: Examples
description: Runnable examples demonstrating todo operations
tags: [examples, cross-vault]
---

# Examples

{{annotation:@warning}}

This directory contains standalone examples that demonstrate the todo app's data model and operations.

## Files

| File           | Description                           |
| -------------- | ------------------------------------- |
| `api-usage.ts` | Programmatic CRUD operations on todos |

## Cross-Vault Links

One of Gitian's features is **cross-vault wikilink resolution**. These links point to files in other vaults within this repository:

- [[App.tsx]] — The main React component (in `src/`)
- [[TodoList.tsx]] — The list rendering component (in `src/components/`)
- [[docs/features]] — The full feature showcase (in `docs/`)
- [[docs/architecture]] — Architecture diagrams (in `docs/`)

> [!note]
> Cross-vault links resolve across vault boundaries. Even though this `examples/` directory is its own vault, links to `src/` files and `docs/` pages still work.

## Running the Example

```bash
npx tsx examples/api-usage.ts
```

This will output the todo statistics and pending items to the console.
