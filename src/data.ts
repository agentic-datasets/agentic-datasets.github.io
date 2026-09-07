// The page copy is the maintainer's, supplied 2026-09-07 and used as written.
// Do not add sentences here: earlier versions of this file accumulated
// carried-over prose from previous drafts, and the page said more than the
// author had written.
//
// Every figure in MEASURED was checked against the frozen claims table in
// `reference/docs/CLAIMS.md` before it landed; the `claim` field records which
// row carries it, so the check is repeatable rather than remembered.

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
  heading: 'What is an Agentic Dataset?',
  statement:
    'An Agentic Dataset carries a machine-readable description of its capabilities, policies, and operating boundaries.',
  body: [
    'Before an agent acts on the dataset, a control plane evaluates the requested action against that contract and records the decision and supporting evidence.',
    'This moves governance from documentation around the dataset into the execution path itself.',
  ],
  verdictsLead: 'The contract produces three explicit admission outcomes:',
  verdicts: [
    { term: 'Approved', gloss: 'the requested action is admissible under the descriptor' },
    { term: 'Refused', gloss: 'a declared policy prevents the requested action' },
    {
      term: 'Indeterminate',
      gloss: 'the available descriptor does not establish whether the action is admissible',
    },
  ],
  close: [
    'Each outcome is attributable to the descriptor evidence that produced it.',
    'The result is a dataset interface designed not only to provide data, but to participate in governed agentic execution.',
  ],
} as const

export const CONTRACT = {
  heading: 'A portable behavioral contract',
  lead: 'Agentic Datasets defines behavior rather than prescribing a particular implementation.',
  body: [
    'The contract consists of 15 normative assertions represented through language-neutral executable vectors. Implementations can therefore be evaluated through their public interfaces without depending on their internal architecture or programming language.',
    'The same vectors are demonstrated directly in the browser and exercised against the reference implementation, agent-framework integrations, and an implementation sharing no reference code.',
  ],
} as const

export const MEASURED = {
  heading: 'Measured portability',
  figures: [
    { figure: '15 / 15', label: 'Normative assertions satisfied through the public interface', claim: 4 },
    { figure: '85', label: 'Language-neutral executable vector steps', claim: 2 },
    { figure: '8', label: 'Measured combinations across four agent runtimes and two dataset boundaries', claim: 5 },
    { figure: '15 / 15', label: 'Assertions passed by a code-independent implementation', claim: 6 },
    { figure: '17 / 17', label: 'Targeted behavioral defects detected by their corresponding assertions', claim: 7 },
    { figure: '0', label: 'Prohibited executions across the measured conformance matrix', claim: 11 },
  ],
  close: [
    'These measurements make portability testable rather than assumed.',
    'The reference repository contains the vectors, conformance suite, measurements, and reproducible evidence behind each result.',
  ],
} as const

export const ARTIFACTS = {
  heading: 'From contract to implementation',
  lead: 'The programme is organized around several complementary artifacts.',
  items: [
    {
      name: 'Reference',
      href: 'https://github.com/agentic-datasets/reference',
      summary:
        'The normative behavioral contract, language-neutral vectors, reference control plane, conformance suite, Authorized Recall@K, and measured results.',
    },
    {
      name: 'Programme',
      href: 'https://github.com/agentic-datasets/programme',
      summary:
        'The conceptual model, terminology, architecture, and licensing boundary for Agentic Datasets.',
    },
    {
      name: 'Showcase',
      href: 'https://github.com/agentic-datasets/showcase',
      summary:
        'Interactive browser demonstrations of the contract using the normative vectors and a TypeScript implementation.',
    },
  ],
  close:
    'Together they separate the idea, the executable contract, and its implementations while keeping them independently inspectable.',
} as const

export const VALIDATION = {
  heading: 'Validation',
  body: [
    "The current conformance work tests observable behavior through an implementation's public interface.",
    'Evidence includes multiple agent runtimes, local and MCP dataset boundaries, mutation testing, public-interface isolation, and a code-independent implementation.',
    'The next stage is broader independent implementation and third-party conformance evidence.',
    'The contract is designed so those implementations can be built and evaluated without permission from the programme.',
  ],
} as const

export const PROGRAMME = {
  heading: 'An open technical programme',
  body: [
    'Agentic Datasets has a dedicated organizational home so the contract can be implemented, tested, cited, and extended independently of any one repository.',
    'The specification, executable vectors, and conformance tooling use open licenses chosen to support independent implementation and experimentation.',
    'Authorship and provenance remain explicit through citation metadata, ORCID, repository history, and associated publications.',
  ],
} as const

export const MARK = {
  heading: 'The mark',
  body: [
    'The Agentic Datasets mark expresses the architecture in two shapes: a governed boundary and an admitted path to the dataset.',
    'The outer square represents the boundary. The opening represents the controlled path through it. The inner square represents the dataset.',
    'The mark belongs to the Agentic Datasets programme and provides a consistent identity across its specifications, implementations, demonstrations, and documentation.',
  ],
  href: 'https://github.com/agentic-datasets/reference/blob/main/brand/README.md',
} as const

export const STATUS = {
  heading: 'Current status',
  lead: 'Agentic Datasets is a release candidate under active validation.',
  body: [
    'The behavioral contract, executable vectors, reference control plane, conformance suite, framework integrations, and browser demonstrations are available now.',
    'The programme welcomes independent implementations, conformance results, integrations, technical discussion, and research building on the contract.',
  ],
  call: 'Implement the contract. Run the vectors. Compare the behavior.',
} as const
