import Mark from './Mark'
import Section from './Section'
import { ORG, LEGAL, MARK } from '../data'

const rule = { borderColor: 'var(--rule)' }
const muted = { color: 'var(--ink-muted)' }
const faint = { color: 'var(--ink-faint)' }

export default function Legal() {
  return (
    <div className="min-h-screen font-sans antialiased [&_section]:border-[color:var(--rule)]">
      <header className="mx-auto w-full max-w-prose px-6 pb-14 pt-16 sm:pb-20 sm:pt-24">
        <a href="/" aria-label="Agentic Datasets" className="mb-8 inline-block no-underline">
          <Mark size={72} />
        </a>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Terms</h1>
        <p className="mt-5 text-lg font-medium leading-relaxed">
          The summary in the site footer is a summary. These are the terms it summarizes, and they
          govern.
        </p>
      </header>

      <Section id="terms" heading="Terms of use" alt>
        <div className="space-y-8">
          {LEGAL.terms.map((t) => (
            <div key={t.title}>
              <h3 className="font-medium">{t.title}</h3>
              <p className="mt-2 leading-relaxed" style={muted}>
                {t.title === 'Licensing' ? (
                  <>
                    {t.body} <a href={MARK.href}>Brand notes</a>.
                  </>
                ) : (
                  t.body
                )}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-10 border-t pt-6 text-sm" style={{ ...rule, ...muted }}>
          Maintainer: {ORG.maintainer} · ORCID <a href={ORG.orcid}>{ORG.orcidLabel}</a>
        </p>
      </Section>

      <footer className="border-t" style={rule}>
        <div className="mx-auto w-full max-w-prose px-6 py-10 text-sm leading-relaxed" style={faint}>
          <p>
            <a href="/">agenticdatasets.org</a> · <a href={ORG.github}>github.com/agentic-datasets</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
