import Hero from './components/Hero'
import Section from './components/Section'
import Mark from './components/Mark'
import Disclaimer from './components/Disclaimer'
import {
  ORG,
  DEFINITION,
  CONTRACT,
  MEASURED,
  MEASURED_CLOSE,
  ARTIFACTS_LEAD,
  REPOSITORIES,
  ARTIFACTS_CLOSE,
  VALIDATION,
  NOT_CLAIMED,
  PROGRAMME,
  MARK,
  STATUS,
} from './data'

const rule = { borderColor: 'var(--rule)' }
const muted = { color: 'var(--ink-muted)' }
const faint = { color: 'var(--ink-faint)' }

export default function App() {
  return (
    <div className="min-h-screen font-sans antialiased [&_section]:border-[color:var(--rule)]">
      <Hero />

      <Section id="definition" kicker="Definition" heading="What is an Agentic Dataset?" alt>
        <p className="text-xl font-medium leading-relaxed">{DEFINITION.statement}</p>
        {DEFINITION.body.map((p) => (
          <p key={p} className="mt-4 leading-relaxed" style={muted}>
            {p}
          </p>
        ))}
        <p className="mt-6 leading-relaxed" style={muted}>
          {DEFINITION.verdictsLead}
        </p>
        <dl className="mt-6 space-y-3 border-t pt-6 text-sm" style={rule}>
          {DEFINITION.verdicts.map((v) => (
            <div key={v.term} className="sm:flex sm:gap-4">
              <dt className="font-mono font-medium sm:w-36 sm:shrink-0">{v.term}</dt>
              <dd style={muted}>{v.gloss}</dd>
            </div>
          ))}
        </dl>
        {DEFINITION.close.map((p) => (
          <p key={p} className="mt-6 leading-relaxed" style={muted}>
            {p}
          </p>
        ))}
        <p className="mt-6 leading-relaxed" style={muted}>
          The three outcomes are also <a href={ORG.showcase}>demonstrated in the browser</a>, running
          the normative conformance vectors client-side &mdash; including the mutant hunt, where the
          implementation is broken on purpose and the assertion named for the defect is the one that
          catches it.
        </p>
      </Section>

      <Section id="contract" kicker="Contract" heading="A portable behavioral contract">
        <p className="text-xl font-medium leading-relaxed">{CONTRACT.lead}</p>
        {CONTRACT.body.map((p) => (
          <p key={p} className="mt-4 leading-relaxed" style={muted}>
            {p}
          </p>
        ))}
      </Section>

      <Section id="measured" kicker="Measured" heading="Measured portability" alt>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {MEASURED.map((m) => (
            <div key={m.label}>
              <dt className="font-mono text-2xl font-medium tabular-nums">{m.figure}</dt>
              <dd className="mt-1 text-sm leading-relaxed" style={muted}>
                {m.label}
              </dd>
            </div>
          ))}
        </dl>
        <div className="mt-10 border-t pt-6" style={rule}>
          {MEASURED_CLOSE.map((p) => (
            <p key={p} className="mb-3 text-sm leading-relaxed last:mb-0" style={muted}>
              {p}
            </p>
          ))}
          <p className="mt-3 text-sm leading-relaxed" style={faint}>
            Each figure is carried in the reference repository&rsquo;s{' '}
            <a href="https://github.com/agentic-datasets/reference/blob/main/docs/CLAIMS.md">
              frozen claims table
            </a>{' '}
            with its own caveat, so it can be checked rather than taken.
          </p>
        </div>
      </Section>

      <Section id="artifacts" kicker="Artifacts" heading="From contract to implementation">
        <p className="mb-8 leading-relaxed" style={muted}>
          {ARTIFACTS_LEAD}
        </p>
        <ul className="space-y-8">
          {REPOSITORIES.map((r) => (
            <li key={r.name}>
              <div className="flex flex-wrap items-baseline gap-x-3">
                <a href={r.href} className="font-mono text-lg font-medium">
                  {r.name}
                </a>
                <span className="text-xs uppercase tracking-wider" style={faint}>
                  {r.note}
                </span>
              </div>
              <p className="mt-2 leading-relaxed" style={muted}>
                {r.summary}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-10 border-t pt-6 leading-relaxed" style={{ ...rule, ...muted }}>
          {ARTIFACTS_CLOSE}
        </p>
      </Section>

      <Section id="validation" kicker="Evidence" heading="Validation" alt>
        {VALIDATION.body.map((p) => (
          <p key={p} className="mb-4 leading-relaxed last:mb-0" style={muted}>
            {p}
          </p>
        ))}
        <h3 className="mt-10 text-xs font-semibold uppercase tracking-[0.18em]" style={faint}>
          Not claimed
        </h3>
        <div className="mt-6 space-y-6 border-t pt-6" style={rule}>
          {NOT_CLAIMED.map((n) => (
            <div key={n.title}>
              <h4 className="font-medium">{n.title}</h4>
              <p className="mt-2 leading-relaxed" style={muted}>
                {n.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="organization" kicker="Programme" heading="An open technical programme">
        {PROGRAMME.map((p) => (
          <p key={p} className="mb-4 leading-relaxed last:mb-0" style={muted}>
            {p}
          </p>
        ))}
      </Section>

      <Section id="mark" kicker="Identity" heading="The mark" alt>
        <div className="flex items-start gap-8">
          <Mark size={88} className="mt-1 hidden shrink-0 sm:block" />
          <div>
            {MARK.body.map((p) => (
              <p key={p} className="mb-4 leading-relaxed last:mb-0" style={muted}>
                {p}
              </p>
            ))}
          </div>
        </div>
        <p className="mt-8 border-t pt-6 leading-relaxed" style={{ ...rule, ...muted }}>
          {MARK.licensing} <a href={MARK.href}>Brand notes</a>.
        </p>
      </Section>

      <Section id="status" kicker="Status" heading="Current status">
        <p className="text-xl font-medium leading-relaxed">{STATUS.lead}</p>
        {STATUS.body.map((p) => (
          <p key={p} className="mt-4 leading-relaxed" style={muted}>
            {p}
          </p>
        ))}
        <p className="mt-8 border-t pt-6 text-lg font-medium leading-relaxed" style={rule}>
          {STATUS.call}
        </p>
        <nav className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a href={ORG.docs}>Read the specification</a>
          <a href={ORG.showcase}>Run the vectors in the browser</a>
          <a href={ORG.github}>Repositories on GitHub</a>
        </nav>
        <p className="mt-8 border-t pt-6 text-sm" style={{ ...rule, ...muted }}>
          Maintainer: {ORG.maintainer} · ORCID <a href={ORG.orcid}>{ORG.orcidLabel}</a>
        </p>
      </Section>

      <footer className="border-t" style={rule}>
        <div
          className="mx-auto w-full max-w-prose px-6 py-10 text-sm leading-relaxed"
          style={faint}
        >
          <p>
            <a href={ORG.github}>github.com/agentic-datasets</a>
          </p>
          <Disclaimer
            ownership={
              <>
                Site and all original code{' '}
                <strong style={{ color: 'var(--ink-muted)' }}>&copy; 2026 {ORG.maintainer}</strong>.
                The text of this site is licensed CC BY 4.0; the mark is covered by neither and is
                all rights reserved &mdash; see the <a href={MARK.href}>brand notes</a>.
              </>
            }
          />
        </div>
      </footer>
    </div>
  )
}
