// Every claim on this page is carried by a file in the organization's own
// repositories: `.github/ORG.md`, `.github/profile/README.md`, the frozen
// `docs/CLAIMS.md` in `reference`, and `reference/brand/README.md`. Nothing
// here is asserted that is not already asserted there. When one of those
// changes, this file is the diff that follows it.

export const ORG = {
  name: 'Agentic Datasets',
  tagline:
    'A behavioural contract for governed agentic datasets: 15 assertions, language-neutral vectors, checked without implementation access.',
  github: 'https://github.com/agentic-datasets',
  docs: 'https://agentic-datasets.github.io/reference/',
  showcase: 'https://agentic-datasets.github.io/showcase/',
  maintainer: 'Alexander Chernov',
  orcid: 'https://orcid.org/0009-0007-3198-2712',
  orcidLabel: '0009-0007-3198-2712',
} as const

export const DEFINITION = {
  statement:
    'An agentic dataset carries a machine-readable descriptor of itself, advertises a bounded set of capabilities, declares prohibitions, and is reached through a control plane that decides whether a requested action is admissible before that action runs.',
  body: [
    'The unit of governance is the decision to act, not the query. A conventional dataset answers or fails to answer.',
    'An agentic dataset additionally produces a verdict — approved, refused, or indeterminate — and an evidence record naming the descriptor clause that produced it.',
  ],
  verdicts: [
    { term: 'approved', gloss: 'the requested action is admissible under the descriptor' },
    { term: 'refused', gloss: 'a named clause prohibits it' },
    { term: 'indeterminate', gloss: 'the descriptor does not decide, and absence of a permit is not a permit' },
  ],
} as const

export const REPOSITORIES = [
  {
    name: 'reference',
    href: 'https://github.com/agentic-datasets/reference',
    summary:
      'The 15-assertion behavioural contract, its language-neutral executable vectors, a reference control plane, the conformance suite, Authorized Recall@K, and all measurements.',
    note: 'Release candidate.',
  },
  {
    name: 'programme',
    href: 'https://github.com/agentic-datasets/programme',
    summary:
      'What agentic datasets are, and where the licensing boundary sits. Prose only.',
    note: 'No code.',
  },
  {
    name: 'showcase',
    href: 'https://github.com/agentic-datasets/showcase',
    summary:
      'Five demonstrations of the contract, running the normative vectors client-side against a TypeScript subject that reproduces the Python baseline.',
    note: 'Runs in the browser.',
  },
  {
    name: '.github',
    href: 'https://github.com/agentic-datasets/.github',
    summary:
      'The organization profile, and the record of what its settings say and why.',
    note: 'Metadata.',
  },
] as const

export const MEASURED = [
  { figure: '15', label: 'normative assertions, as 85 language-neutral vector steps' },
  { figure: '15 / 15', label: 'portable through the public interface alone' },
  { figure: '4 × 2', label: 'agent runtimes × dataset boundaries, 15/15 each' },
  { figure: '15 / 15', label: 'on an implementation sharing no code with the reference' },
  { figure: '17 / 17', label: 'targeted violations detected by their named assertion' },
  { figure: '0', label: 'prohibited executions across the measured matrix' },
] as const

export const MEASURED_CAVEAT =
  'Every figure is reproducible from the reference repository and carried in its frozen claims table with its own caveat.'

export const NOT_CLAIMED = [
  {
    title: 'No security guarantee',
    body: "A subject's capability report is its own account of itself, and one that under-reports passes the discovery assertion while concealing a tool. Conformance here is a claim an implementation makes about itself, made checkable — not an adversarial audit.",
  },
  {
    title: 'Interpretive independence',
    body: 'The independent implementation is independent of the reference code, not of its author’s reading of the specification, because one person wrote both. Establishing it requires somebody else. It is the next validation threshold and the contribution this project most needs.',
  },
] as const

// From ORG.md. This is the part of the record that is genuinely about the
// organization rather than about the contract, which is why it is on this page
// and not in the reference documentation.
export const WHY_ORG = [
  'The organization exists so that the contract has a neutral home. A repository under a personal account reads as one person’s implementation; the same repository under the programme’s own name reads as the project’s, which is what an independent implementation, a conformance issue, or a citation of an assertion needs it to be.',
  'Personal authorship is unaffected. CITATION.cff, ORCID, commit history and papers all still attribute the work.',
] as const

export const NAME_REJECTED = [
  { suffix: '-foundation', because: 'implies an institution that does not exist' },
  { suffix: '-standard', because: 'overstates maturity' },
  { suffix: '-consortium', because: 'implies membership and governance' },
  { suffix: 'a company name', because: 'sits at the wrong layer entirely' },
] as const

export const NAME_BODY =
  'The name states the technical programme and claims nothing else. One maintainer, three repositories: an organization describing itself as a standards body would invite exactly the scrutiny it cannot yet survive.'

export const PREFIX_NOTE =
  'Repositories here carry no visibility prefix. The ok-/dk- convention used in the personal account distinguishes nothing inside a single-purpose organization, where every repository belongs to the same project, so it is dropped at the account boundary: reference, programme, .github.'

export const MARK = {
  body: [
    'A bounded object with one controlled opening. The outer square is the boundary, the break in its top edge is the single admitted path, and the inner square is the dataset.',
    'It is the whole model in two shapes: a boundary, and the one way through it. The mark belongs to the programme, not to any one repository.',
  ],
  licensing:
    'The specification is CC BY 4.0, the vectors are CC0, and the conformance software is Apache-2.0, so anyone can implement the contract without asking. The mark is deliberately the exception: all rights reserved, because an identifier anyone may modify identifies nothing.',
  href: 'https://github.com/agentic-datasets/reference/blob/main/brand/README.md',
} as const

export const STATUS = {
  body: [
    'Agentic Datasets is an independent technical project initiated and maintained by Alexander Chernov.',
    'The reference implementation is a release candidate: nothing is archived or minted yet, so a finding can still change the artifact rather than becoming errata against a published record.',
  ],
  permission: 'Implementing the contract requires no permission and no licence from anybody.',
} as const
