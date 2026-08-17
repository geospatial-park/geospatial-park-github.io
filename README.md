# geospatial-park.github.io

Personal academic website for Jaehee Park — Visiting Assistant Professor,
Department of Geographic Information Science, University of Redlands.

Built with [Jekyll](https://jekyllrb.com/) and hosted on GitHub Pages at
<https://geospatial-park.github.io>.

## Structure

| Path | Purpose |
| --- | --- |
| `_config.yml` | Site metadata, navigation, contact links |
| `_layouts/default.html` | Page shell (header, nav, footer) |
| `_posts/` | Project write-ups, listed on the Research page |
| `assets/css/style.css` | All styling |
| `assets/images/` | Profile photo and other images |
| `assets/CV_JaeheePark.pdf` | Downloadable CV |
| `index.md`, `research.md`, `teaching.md`, `CV.md` | Site pages |
| `map/`, `js/` | Web-mapping course demos (not linked from the nav) |

## Editing content

Contact details, the site title, and the navigation menu live in `_config.yml`,
so they only need to be changed in one place. Everything else is Markdown.

To add a project write-up, create a file in `_posts/` named
`YYYY-MM-DD-short-title.md` with this front matter:

```yaml
---
layout: default
title: "Project title"
categories: research
summary: "One sentence shown in the Research list."
---
```

## Running locally

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>.
