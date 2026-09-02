# agentic-datasets.github.io

The organization site for the **Agentic Datasets** programme, served at
<https://agentic-datasets.github.io/>.

It is about the organization: what an agentic dataset is, which repositories
hold what, what has been measured, what is explicitly not claimed, and why the
programme has an organization of its own. It is **not** documentation of the
contract — that lives in [`reference`](https://github.com/agentic-datasets/reference)
and is published at
[agentic-datasets.github.io/reference/](https://agentic-datasets.github.io/reference/),
a project Pages site under the same domain, unaffected by this repository.

## Where the content comes from

Nothing on the page is asserted that is not already asserted in the
organization's own repositories. [`src/data.ts`](src/data.ts) is the single
content file, and every entry in it traces to one of:

| Source | Supplies |
|---|---|
| [`.github/profile/README.md`](https://github.com/agentic-datasets/.github/blob/main/profile/README.md) | the definition, the repository table, *Measured*, *Not claimed*, *Status* |
| [`.github/ORG.md`](https://github.com/agentic-datasets/.github/blob/main/ORG.md) | why the organization exists, why the name, why no repository prefix |
| [`reference/brand/README.md`](https://github.com/agentic-datasets/reference/blob/main/brand/README.md) | the mark, its meaning, and the licensing asymmetry |
| `reference/docs/CLAIMS.md` (frozen) | the figures under *Measured* |

When one of those changes, the change arrives here as a diff to `src/data.ts`.

## Build

Vite + React + TypeScript + Tailwind, building into `docs/`, which is what
Pages serves from `main`. The built output is committed — `.github/workflows/deploy.yml`
rebuilds and commits it on push, so a clone always carries the served site.

```sh
make dev      # dev server
make build    # build into docs/
make check    # verify docs/ is publishable
```

## Theme

Three states: **Light**, **Dark**, and **System**. The control is in the page
header; the choice persists in `localStorage` under `theme`, and *System* stores
nothing, so the page follows the reader's OS setting and keeps following it when
that changes — no media-query listener is involved, because removing the
`data-theme` attribute hands the decision back to the CSS.

An inline script in `index.html` applies the stored choice **before first
paint**. It duplicates a few lines of `ThemeToggle.tsx` on purpose: by the time
the bundle executes, the wrong theme has already been painted. Every storage
access is wrapped, because `localStorage` throws rather than returning null in a
browser set to block site data — the control still works for the session, it
just does not persist.

`index.css` defines the light palette on bare `:root`, supplies dark inside
`@media (prefers-color-scheme: dark)` guarded by `:not([data-theme="light"])`,
then redefines both under `:root[data-theme="..."]` so an explicit choice wins
in either direction. No colour is defined only inside the media query.

## Typeface

Roboto Slab, self-hosted from `public/fonts/`, variable weight 300–700 in one
woff2 per subset — 55 KB for the whole range, against roughly 680 KB for the
four static TTFs the other sites in this account vendor. Apache 2.0; see
[`public/fonts/README.md`](public/fonts/README.md) for provenance and the
licence, which covers the typeface only and not the mark.

## Brand assets

`public/brand/` holds copies of the canonical mark from `reference/brand/`.
They are copies, not the source: change the mark there, then re-copy. The mark
is drawn inline in [`src/components/Mark.tsx`](src/components/Mark.tsx) so it
inherits text colour and inverts in dark mode without a second asset, which is
the mechanism the brand notes specify.

The mark is **all rights reserved** and is not covered by the licence below.

## Licence

Site text: CC BY 4.0. Site source: MIT. The mark: all rights reserved, per the
[brand notes](https://github.com/agentic-datasets/reference/blob/main/brand/README.md).
