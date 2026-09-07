import Hero from './components/Hero'
import Section from './components/Section'
import Mark from './components/Mark'
import Disclaimer from './components/Disclaimer'
import {
  ORG,
  DEFINITION,
  CONTRACT,
  MEASURED,
  ARTIFACTS,
  VALIDATION,
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

      <Section id="definition" heading={DEFINITION.heading} alt>
        <p className="text-xl font-medium leading-relaxed">{DEFINITION.statement}</p>
        {DEFINITION.body.map((p) => (
          <p key={p} className="mt-4 leading-relaxed" style={muted}>
            {p}
          </p>
        ))}
        <p className="mt-6 leading-relaxed" style={muted}>
          {DEFINITION.verdictsLead}
        </p>
        <dl className="mt-6 space-y-3 border-t pt-6" style={rule}>
          {DEFINITION.verdicts.map((v) => (
            <div key={v.term} className="sm:flex sm:gap-4">
              <dt className="font-medium sm:w-36 sm:shrink-0">{v.term}</dt>
              <dd style={muted}>{v.gloss}</dd>
            </div>
          ))}
        </dl>
        {DEFINITION.close.map((p) => (
          <p key={p} className="mt-6 leading-relaxed" style={muted}>
            {p}
          </p>
        ))}
      </Section>

      <Section id="contract" heading={CONTRACT.heading}>
        <p className="text-xl font-medium leading-relaxed">{CONTRACT.lead}</p>
        {CONTRACT.body.map((p) => (
          <p key={p} className="mt-4 leading-relaxed" style={muted}>
            {p}
          </p>
        ))}
      </Section>

      <Section id="measured" heading={MEASURED.heading} alt>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {MEASURED.figures.map((m) => (
            <div key={m.label}>
              <dt className="font-mono text-2xl font-medium tabular-nums">{m.figure}</dt>
              <dd className="mt-1 text-sm leading-relaxed" style={muted}>
                {m.label}
              </dd>
            </div>
          ))}
        </dl>
        <div className="mt-10 border-t pt-6" style={rule}>
          {MEASURED.close.map((p) => (
            <p key={p} className="mb-3 leading-relaxed last:mb-0" style={muted}>
              {p}
            </p>
          ))}
        </div>
      </Section>

      <Section id="artifacts" heading={ARTIFACTS.heading}>
        <p className="mb-8 leading-relaxed" style={muted}>
          {ARTIFACTS.lead}
        </p>
        <ul className="space-y-8">
          {ARTIFACTS.items.map((r) => (
            <li key={r.name}>
              <a href={r.href} className="text-lg font-medium">
                {r.name}
              </a>
              <p className="mt-2 leading-relaxed" style={muted}>
                {r.summary}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-10 border-t pt-6 leading-relaxed" style={{ ...rule, ...muted }}>
          {ARTIFACTS.close}
        </p>
      </Section>

      <Section id="validation" heading={VALIDATION.heading} alt>
        {VALIDATION.body.map((p) => (
          <p key={p} className="mb-4 leading-relaxed last:mb-0" style={muted}>
            {p}
          </p>
        ))}
      </Section>

      <Section id="organization" heading={PROGRAMME.heading}>
        {PROGRAMME.body.map((p) => (
          <p key={p} className="mb-4 leading-relaxed last:mb-0" style={muted}>
            {p}
          </p>
        ))}
      </Section>

      <Section id="mark" heading={MARK.heading} alt>
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
      </Section>

      <Section id="status" heading={STATUS.heading}>
        <p className="text-xl font-medium leading-relaxed">{STATUS.lead}</p>
        {STATUS.body.map((p) => (
          <p key={p} className="mt-4 leading-relaxed" style={muted}>
            {p}
          </p>
        ))}
        <p className="mt-8 border-t pt-6 text-lg font-medium leading-relaxed" style={rule}>
          {STATUS.call}
        </p>
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
                Site and original code{' '}
                <strong style={{ color: 'var(--ink-muted)' }}>&copy; 2026 {ORG.maintainer}</strong>.
                Site text is licensed CC BY 4.0. The Agentic Datasets mark is all rights reserved;
                see the <a href={MARK.href}>brand notes</a>.
              </>
            }
          />
        </div>
      </footer>
    </div>
  )
}
