---
title: api-usage.ts Documentation
tags: [file-doc, example, api]
---

# api-usage.ts — File Documentation

This file-doc documents `examples/api-usage.ts`, a standalone script demonstrating how to use the Todo interface outside of React.

## What This Example Shows

1. **Factory functions** — `createTodo()` and `createBatch()` for constructing todos
2. **Filtering** — Pure functions for querying collections (`getCompleted`, `getPending`)
3. **Statistics** — `getStats()` computes summary metrics over a todo array

## How File-Docs Work

This file-doc lives at `examples/docs/api-usage.ts.md`. The double-extension pattern (`api-usage.ts.md`) associates it with `api-usage.ts`.

> [!info]
> When you open `api-usage.ts` in Gitian, you'll see both this documentation (in the Docs tab) and the `@gitian` annotations (inline with the source code).

> [!tip]
> Annotations in `api-usage.ts` use `--group=api` metadata to organize them into the `api` group — you can embed all of them with `{{annotation:#api}}`.
