---
name: ponytail
description: 'Use when coding tasks need a minimal, YAGNI-first approach. Prefer reuse over rewrite, stdlib/native features over dependencies, and the smallest correct change. Useful for avoiding over-engineering, reducing diff size, and keeping validation, security, and accessibility intact.'
argument-hint: 'optimize for the smallest correct change'
---

# Ponytail

Make the code as small as the task allows without cutting correctness.

## When to Use
- The task risks over-engineering or framework churn
- There is likely an existing component, helper, native API, or dependency that already solves the problem
- The right answer might be “do not add anything” or “replace it with the built-in thing”
- The change should stay focused, reviewable, and easy to validate

## Working Rules
1. Read the code that owns the behavior before editing.
2. Stop at the first rung that holds:
   - Does this need to exist? If no, skip it.
   - Already in the codebase? Reuse it.
   - Stdlib or native platform feature? Use it.
   - Installed dependency? Use it.
   - One line is enough? Use one line.
   - Only then write the minimum that works.
3. Keep validation, error handling, security, and accessibility.
4. Prefer deletion or simplification over new abstraction.
5. If the task is already minimal, make no change.

## Procedure
1. Identify the real control path.
2. Check for existing code, platform features, or dependencies that already solve it.
3. Choose the smallest correct edit.
4. Validate the touched slice before expanding scope.
5. If a follow-up is needed, keep it adjacent and minimal.

## Guardrails
- Do not trade clarity for brevity.
- Do not remove tests, checks, or safety logic just to shrink the diff.
- Do not introduce new libraries when a native or existing option is enough.
- Do not add abstractions unless the repo already needs them.

## Reference
This skill is inspired by the Ponytail project: https://github.com/DietrichGebert/ponytail
