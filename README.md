# Jiaqi Tang — Personal Academic Website

This repository is structured as a **PhD-application-first academic personal website** built with Jekyll and GitHub Pages.

## Site structure

- `/` — concise academic homepage
- `/research/` — formal research experience
- `/projects/` — selected technical projects
- `/experience/` — professional and teaching experience
- `/about/` — biography, education, awards, skills, languages, service, and portrait
- `/blog/` — intentionally empty now; future research / technical posts
- `/cv/` — embedded CV + PDF link

## Important: preserve your existing portrait

This rebuild references the existing repository file:

```text
assets/images/selfie.jpg
```

It is intentionally **not duplicated in this package**. Keep that file when replacing the rest of the repository.

## Replace the old site

1. Delete all existing files in `_posts/` (the old trading posts).
2. Keep `assets/images/selfie.jpg`.
3. Replace the old root files with the files in this rebuild.
4. The newest CV is included as `assets/files/Jiaqi_Tang_CV.pdf`.
5. Commit and push to `main`.
6. In GitHub → Settings → Pages, use **Deploy from a branch**, branch `main`, folder `/ (root)`.

## Adding a future blog post

Create a file such as:

```text
_posts/2026-10-15-world-model-notes.md
```

with front matter:

```yaml
---
layout: post
title: "World Model Notes"
description: "A short description."
categories: [research, world-models]
---
```

Then write the post in Markdown below the front matter.
