---
title: Annotations
description: How to write annotations, use metadata, groups, and directives
tags: [reference, annotations, code-intelligence]
---

# Annotations

Annotations are structured comments in your source code that Gitian detects and renders. They follow the `@anchor:tag` syntax (default: `@gitian:tag`).

## Writing annotations

Add a comment with `@gitian:tag` followed by description lines. Gitian captures the code block that follows:

```typescript
// @gitian:note
// This handles OAuth token refresh.
// Tokens are cached and refreshed 5 minutes before expiry.
export async function refreshToken(token: Token) {
  const cached = tokenCache.get(token.id);
  if (cached && cached.expiresAt > Date.now() + 300_000) {
    return cached;
  }
  return fetchNewToken(token);
}
```

## Tag kinds

| Kind | Behavior |
|------|----------|
| **marker** | Renders as a collapsible summary list (e.g. todo items) |
| **inline** | Renders as a card showing the description only — no code capture |
| **block** | Renders as a card with the description and captured code block |
| **api** | Renders a ReadMe-style API card: title heading, summary, Request payload, and Response payload |

### The `api` kind

Use `kind: api` (or the built-in `api` tag) to document RPC endpoints, REST routes, webhooks, or any request/response interface. The Request and Response payloads are imported from other annotations by `--id`:

```typescript
// @gitian:note --id=AddTodoReq
// AddTodo request shape — text must be non-empty.
interface AddTodoRequest {
  text: string;
}

// @gitian:note --id=AddTodoResp
// AddTodo response shape — the created todo item.
interface AddTodoResponse {
  todo: { id: string; text: string; completed: boolean; createdAt: number };
}

// @gitian:api Adds a new todo item to the list and persists it to localStorage.
// --title="addTodo"
// --request=AddTodoReq
// --response=AddTodoResp
function addTodo(text: string) { ... }
```

The card renders a **Request** panel with the `AddTodoRequest` interface code and a **Response** panel with the `AddTodoResponse` interface code — pulled live from those annotations. Both `--request=` and `--response=` are optional; omit either to render the card without that section.

## Three-tier detection

Gitian supports three detection tiers, in priority order:

1. **`@gitian:tag` annotations** — always on. Full-featured with code capture, urgency, groups, and pinning.
2. **Doc comment tags** — opt-in via `detect_docs: true`. Detects `@param`, `@returns`, `@deprecated`, `@throws`, `@example`, `@see`, `@since`, `@typedef`, `@template` inside `/** */` and `///` blocks. Muted styling, no code capture.
3. **Bare keywords** — opt-in via `detect_keywords: true`. Detects `TODO`, `FIXME`, `HACK`, `XXX`, `BUG`, `OPTIMIZE` in comments. Muted styling, no code capture.

## Metadata

Annotation comments support `--key=value` metadata lines:

```typescript
// @gitian:security
// --id=SEC-042
// --group=auth
// --urgency=critical
// SQL injection risk in user input handling
```

### Supported metadata

| Key | Description |
|-----|-------------|
| `--id=value` | Unique identifier for the annotation (used in directives and as payload targets) |
| `--title="..."` | Override the displayed heading for the card (use quotes for multi-word values) |
| `--group=name` | Assign annotation to a named group |
| `--urgency=level` | Override urgency: `subtle`, `normal`, `loud`, `critical` |
| `--module=name` | Explicitly bind annotation to a module |
| `--request=id` | **api kind only** — id of the annotation whose code becomes the Request payload |
| `--response=id` | **api kind only** — id of the annotation whose code becomes the Response payload |

Metadata can appear on any line within the annotation comment. Text after whitespace is ignored (acts as an inline comment): `--id=SEC-042 (security audit item)`.

## Groups

Groups organize annotations across files. Assign via `--group=name` metadata or via tag config `groups` field.

```typescript
// @gitian:note
// --group=auth
// Token validation middleware
```

Groups defined in `.gitian/config.yaml` get custom colors and labels. Groups from `--group=` metadata that aren't in config still work — they just use default styling.

## Directives

Embed annotations in your markdown docs using the `{{type:argument}}` syntax:

### Single annotation

```markdown
{{annotation:SEC-042}}
```

Embeds the annotation with id `SEC-042` as a rendered card.

### By group

```markdown
{{annotation:#auth}}
```

Embeds all annotations in the `auth` group.

### By tag

```markdown
{{annotation:@security}}
```

Embeds all annotations with the `security` tag.
