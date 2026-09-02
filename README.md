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
