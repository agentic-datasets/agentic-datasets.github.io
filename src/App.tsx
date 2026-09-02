import Hero from './components/Hero'
import Section from './components/Section'
import Mark from './components/Mark'
import Disclaimer from './components/Disclaimer'
import {
  ORG,
  DEFINITION,
  REPOSITORIES,
  MEASURED,
  MEASURED_CAVEAT,
  NOT_CLAIMED,
  WHY_ORG,
  NAME_REJECTED,
  NAME_BODY,
  PREFIX_NOTE,
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

      <Section id="definition" title="Definition" alt>
        <p className="text-xl font-medium leading-relaxed">{DEFINITION.statement}</p>
        {DEFINITION.body.map((p) => (
          <p key={p} className="mt-4 leading-relaxed" style={muted}>
            {p}
          </p>
        ))}
        <p className="mt-6 leading-relaxed" style={muted}>
          The three verdicts are the whole of it. They are also{' '}
          <a href={ORG.showcase}>demonstrated in the browser</a>, running the normative conformance
          vectors client-side &mdash; including the mutant hunt, where the implementation is broken
          on purpose and the assertion named for the defect is the one that catches it.
        </p>
        <dl className="mt-8 space-y-3 border-t pt-6 text-sm" style={rule}>
          {DEFINITION.verdicts.map((v) => (
            <div key={v.term} className="sm:flex sm:gap-4">
              <dt className="font-mono font-medium sm:w-36 sm:shrink-0">{v.term}</dt>
              <dd style={muted}>{v.gloss}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="repositories" title="Repositories">
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
        <p className="mt-10 border-t pt-6 text-sm leading-relaxed" style={{ ...rule, ...faint }}>
          {PREFIX_NOTE}
        </p>
      </Section>

      <Section id="measured" title="Measured" alt>
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
        <p className="mt-10 border-t pt-6 text-sm leading-relaxed" style={{ ...rule, ...muted }}>
          {MEASURED_CAVEAT}
        </p>
      </Section>

      <Section id="not-claimed" title="Not claimed">
        <div className="space-y-8">
          {NOT_CLAIMED.map((n) => (
            <div key={n.title}>
              <h3 className="font-medium">{n.title}</h3>
              <p className="mt-2 leading-relaxed" style={muted}>
                {n.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="organization" title="Why an organization" alt>
        {WHY_ORG.map((p) => (
          <p key={p} className="mb-4 leading-relaxed last:mb-0" style={muted}>
            {p}
          </p>
        ))}
        <h3 className="mt-10 font-medium">Why this name</h3>
        <p className="mt-2 leading-relaxed" style={muted}>
          {NAME_BODY}
        </p>
        <dl className="mt-6 space-y-2 text-sm">
          {NAME_REJECTED.map((n) => (
            <div key={n.suffix} className="sm:flex sm:gap-4">
              <dt className="font-mono sm:w-40 sm:shrink-0" style={faint}>
                {n.suffix}
              </dt>
              <dd style={muted}>{n.because}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="mark" title="The mark">
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

      <Section id="status" title="Status" alt>
        {STATUS.body.map((p) => (
          <p key={p} className="mb-4 leading-relaxed last:mb-0" style={muted}>
            {p}
          </p>
        ))}
        <p className="mt-6 text-lg font-medium leading-relaxed">{STATUS.permission}</p>
        <p className="mt-8 border-t pt-6 text-sm" style={{ ...rule, ...muted }}>
          Maintainer: {ORG.maintainer} · ORCID{' '}
          <a href={ORG.orcid}>{ORG.orcidLabel}</a>
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
                all rights reserved &mdash; see the <a href={MARK.href}>brand notes</a>. Implementing
                the contract itself requires no permission and no licence from anybody.
              </>
            }
          />
        </div>
      </footer>
    </div>
  )
}
