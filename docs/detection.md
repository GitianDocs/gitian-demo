# Detection Tiers

Gitian supports three tiers of annotation detection, each progressively more automatic.

## Tier 1: Explicit Annotations (always on)

Tag your code with `@gitian` or `@gitian:<tag>` in any comment style. These are the most powerful — they support code capture, metadata, groups, and all tag kinds.

```ts
// @gitian:note Requires Node 18+ for crypto.randomUUID()
```

## Tier 2: Doc Comment Tags (opt-in)

Enable `detect_docs: true` in your config to extract annotations from JSDoc and triple-slash comments. Tags like `@param`, `@deprecated`, `@returns`, and `@see` are automatically recognized.

```ts
/** @param id - The user ID to look up */
/** @deprecated Use fetchUserV2 instead */
```

Doc annotations appear with muted styling to distinguish them from explicit `@gitian` annotations.

## Tier 3: Bare Keywords (opt-in)

Enable `detect_keywords: true` to recognize `TODO`, `FIXME`, `HACK`, and other common keywords in any comment style.

```ts
// TODO: add error boundary
// FIXME: this breaks on mobile
// HACK: workaround for hydration mismatch
```

Keywords are mapped to built-in tags — `TODO` becomes a task marker, `FIXME` maps to `bug`, `HACK` maps to `warning`, etc.

## Configuration

Both tiers are opt-in via `.gitian/config.yaml`:

```yaml
annotations:
  detect_docs: true
  detect_keywords: true
```

You can also enable them per-file using YAML front matter in a doc file:

```yaml
---
detect_docs: true
detect_keywords: true
---
```
