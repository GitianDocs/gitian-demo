---
title: Architecture
description: Component tree and data flow for the todo app
tags: [architecture, components, data-flow]
scope: global,security
---

# Architecture

This document describes the component architecture and data flow of the todo app.

## Component Tree

```mermaid
graph TD
    A["App"] --> B["AddTodo"]
    A --> C["TodoList"]
    C --> D["TodoItem"]
    C --> E["TodoItem"]
    C --> F["TodoItem ..."]

    style A fill:#4f46e5,color:#fff
    style B fill:#059669,color:#fff
    style C fill:#059669,color:#fff
    style D fill:#d97706,color:#fff
    style E fill:#d97706,color:#fff
    style F fill:#d97706,color:#fff
```

## Data Flow

```mermaid
sequenceDiagram
    participant U as User
    participant A as AddTodo
    participant H as useTodos
    participant S as localStorage

    U->>A: Type text + submit
    A->>H: addTodo(text)
    H->>H: setState([...todos, newTodo])
    H->>S: setItem(key, JSON)
    H-->>A: Re-render with new list
```

## Source Files

Each component lives in its own file within [[src/]]:

- [[App.tsx]] — Root component that wires everything together
- [[TodoList.tsx]] — Receives the todo array and renders sorted items
- [[TodoItem.tsx]] — Individual todo with toggle checkbox and delete button
- [[AddTodo.tsx]] — Controlled input form for creating new todos
- [[useTodos.ts]] — Custom hook managing state and persistence

## State Management

The app uses a single `useState` hook inside `useTodos`. There is no external state library — React's built-in state is sufficient for this scale.

> [!note]
> The `useTodos` hook follows the **custom hook pattern**: encapsulate related state and effects, return a clean API. See [[docs/features#Code Blocks]] for the TypeScript interface.

## Persistence

Todos are serialized to `localStorage` on every state change via a `useEffect`. On mount, the hook reads from storage to restore previous state:

```mermaid
flowchart LR
    A[Component Mount] --> B[Read localStorage]
    B --> C[Initialize State]
    C --> D[User Interaction]
    D --> E[Update State]
    E --> F[Write localStorage]
    F --> D
```

> [!tip]
> Open DevTools → Application → Local Storage to inspect the persisted data.
