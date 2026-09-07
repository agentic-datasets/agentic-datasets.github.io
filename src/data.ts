// Every claim on this page is carried by a file in the organization's own
// repositories: `.github/ORG.md`, `.github/profile/README.md`, the frozen
// `docs/CLAIMS.md` in `reference`, and `reference/brand/README.md`. Nothing
// here is asserted that is not already asserted there. When one of those
// changes, this file is the diff that follows it.
//
// Rewritten 2026-09-07 from copy supplied by the maintainer. The page now
// leads with what the contract does for a reader rather than with its own
// definition, and every figure was re-checked against docs/CLAIMS.md before
// the rewrite landed. Spelling is American, following the supplied copy; the
// GitHub org description and the frozen claims table are still British and
// were deliberately left alone.

export const ORG = {
  name: 'Agentic Datasets',
  tagline:
    'A machine-readable contract that lets datasets declare what AI agents can do — and makes those decisions observable, portable, and testable.',
  subline:
    '15 normative assertions · language-neutral conformance vectors · tested across multiple agent runtimes and dataset boundaries',
  github: 'https://github.com/agentic-datasets',
  docs: '/reference/',
  showcase: '/showcase/',
  maintainer: 'Alexander Chernov',
  orcid: 'https://orcid.org/0009-0007-3198-2712',
  orcidLabel: '0009-0007-3198-2712',
} as const

export const NAV = [
  { label: 'Explore the showcases', href: '/showcase/' },
  { label: 'Read the specification', href: '/reference/' },
  { label: 'View the repositories', href: 'https://github.com/agentic-datasets' },
] as const

export const DEFINITION = {
  statement:
    'An Agentic Dataset carries a machine-readable description of its capabilities, policies, and operating boundaries.',
  body: [
    'Before an agent acts on the dataset, a control plane evaluates the requested action against that contract and records the decision and supporting evidence.',
    'This moves governance from documentation around the dataset into the execution path itself.',
  ],
  verdictsLead: 'The contract produces three explicit admission outcomes:',
  verdicts: [
    { term: 'approved', gloss: 'the requested action is admissible under the descriptor' },
    { term: 'refused', gloss: 'a declared policy prevents the requested action' },
    {
      term: 'indeterminate',
      gloss: 'the available descriptor does not establish whether the action is admissible',
    },
  ],
  close: [
    'Each outcome is attributable to the descriptor evidence that produced it.',
    'The result is a dataset interface designed not only to provide data, but to participate in governed agentic execution.',
  ],
} as const

export const CONTRACT = {
  lead: 'Agentic Datasets defines behavior rather than prescribing a particular implementation.',
  body: [
    'The contract consists of 15 normative assertions represented through language-neutral executable vectors. Implementations can therefore be evaluated through their public interfaces without depending on their internal architecture or programming language.',
    'The same vectors are demonstrated directly in the browser and exercised against the reference implementation, agent-framework integrations, and an implementation sharing no reference code.',
  ],
} as const

// Each figure traces to a numbered row of the frozen claims table in
// `reference/docs/CLAIMS.md`; the `claim` field is the row, so a reader
// checking this page has somewhere to check it against.
export const MEASURED = [
  { figure: '15 / 15', label: 'Normative assertions satisfied through the public interface', claim: 4 },
  { figure: '85', label: 'Language-neutral executable vector steps', claim: 2 },
  { figure: '8', label: 'Measured combinations across four agent runtimes and two dataset boundaries', claim: 5 },
  { figure: '15 / 15', label: 'Assertions passed by a code-independent implementation', claim: 6 },
  { figure: '17 / 17', label: 'Targeted behavioral defects detected by their corresponding assertions', claim: 7 },
  { figure: '0', label: 'Prohibited executions across the measured conformance matrix', claim: 11 },
] as const

export const MEASURED_CLOSE = [
  'These measurements make portability testable rather than assumed.',
  'The reference repository contains the vectors, conformance suite, measurements, and reproducible evidence behind each result.',
] as const

export const ARTIFACTS_LEAD = 'The programme is organized around several complementary artifacts.'

export const REPOSITORIES = [
  {
    name: 'Reference',
    href: 'https://github.com/agentic-datasets/reference',
    summary:
      'The normative behavioral contract, language-neutral vectors, reference control plane, conformance suite, Authorized Recall@K, and measured results.',
    note: 'Release candidate.',
  },
  {
    name: 'Programme',
    href: 'https://github.com/agentic-datasets/programme',
    summary:
      'The conceptual model, terminology, architecture, and licensing boundary for Agentic Datasets.',
    note: 'Prose only.',
  },
  {
    name: 'Showcase',
    href: 'https://github.com/agentic-datasets/showcase',
    summary:
      'Interactive browser demonstrations of the contract using the normative vectors and a TypeScript implementation.',
    note: 'Runs in the browser.',
  },
] as const

export const ARTIFACTS_CLOSE =
  'Together they separate the idea, the executable contract, and its implementations while keeping them independently inspectable.'

export const VALIDATION = {
  body: [
    "The current conformance work tests observable behavior through an implementation's public interface.",
    'Evidence includes multiple agent runtimes, local and MCP dataset boundaries, mutation testing, public-interface isolation, and a code-independent implementation.',
    'The next stage is broader independent implementation and third-party conformance evidence. The contract is designed so those implementations can be built and evaluated without permission from the programme.',
  ],
} as const

// Kept as part of Validation rather than dropped with the old "Not claimed"
// section. Claim 13 of the frozen table is `Explicitly not claimed`, and the
// table says of it: "This line is load-bearing. Without it the conformance
// vocabulary drifts into sounding like a security certification, which is the
// single easiest overclaim available to this project." A page asserting
// portability without them would assert more than the record supports.
export const NOT_CLAIMED = [
  {
    title: 'No security guarantee',
    body: "A subject's capability report is its own account of itself, and one that under-reports passes the discovery assertion while concealing a tool. Conformance here is a claim an implementation makes about itself, made checkable — not an adversarial audit.",
  },
  {
    title: 'Interpretive independence',
    body: 'The code-independent implementation is independent of the reference code, not of its author’s reading of the specification, because one person wrote both. Establishing it requires somebody else. It is the next validation threshold and the contribution this project most needs.',
  },
] as const

export const PROGRAMME = [
  'Agentic Datasets has a dedicated organizational home so the contract can be implemented, tested, cited, and extended independently of any one repository.',
  'The specification, executable vectors, and conformance tooling use open licenses chosen to support independent implementation and experimentation.',
  'Authorship and provenance remain explicit through citation metadata, ORCID, repository history, and associated publications.',
] as const

export const MARK = {
  body: [
    'The Agentic Datasets mark expresses the architecture in two shapes: a governed boundary and an admitted path to the dataset.',
    'The outer square represents the boundary. The opening represents the controlled path through it. The inner square represents the dataset.',
    'The mark belongs to the Agentic Datasets programme and provides a consistent identity across its specifications, implementations, demonstrations, and documentation.',
  ],
  licensing:
    'The specification is CC BY 4.0, the vectors are CC0, and the conformance software is Apache-2.0, so anyone can implement the contract without asking. The mark is deliberately the exception: all rights reserved, because an identifier anyone may modify identifies nothing.',
  href: 'https://github.com/agentic-datasets/reference/blob/main/brand/README.md',
} as const

export const STATUS = {
  lead: 'Agentic Datasets is a release candidate under active validation.',
  body: [
    'The behavioral contract, executable vectors, reference control plane, conformance suite, framework integrations, and browser demonstrations are available now.',
    'Nothing is archived or minted yet, so a finding can still change the artifact rather than becoming errata against a published record.',
    'Agentic Datasets is an independent technical project initiated and maintained by Alexander Chernov. The programme welcomes independent implementations, conformance results, integrations, technical discussion, and research building on the contract.',
  ],
  call: 'Implement the contract. Run the vectors. Compare the behavior.',
} as const
