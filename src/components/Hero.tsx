import Mark from './Mark'
import ThemeToggle from './ThemeToggle'
import { ORG, NAV } from '../data'

export default function Hero() {
  return (
    <header className="mx-auto w-full max-w-prose px-6 pb-14 pt-16 sm:pb-20 sm:pt-24">
      {/* The mark keeps clear space of at least the inner square on every side,
          per the brand notes; the control sits opposite it on the same line so
          it takes no vertical room of its own. */}
      <div className="mb-8 flex items-start justify-between gap-6">
        <Mark size={72} />
        <ThemeToggle />
      </div>
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{ORG.name}</h1>
      <p className="mt-5 text-lg font-medium leading-relaxed">{ORG.tagline}</p>
      <p className="mt-4 text-sm leading-relaxed" style={{ color: 'var(--ink-faint)' }}>
        {ORG.subline}
      </p>
      {/* Buttons rather than inline links, so the ways into the project read as
          actions and not as body text. Monochrome like the mark: the first entry
          is filled, the rest are outlined, and hover inverts. The arrow says
          where a link goes: within this site, or out to another one. */}
      <nav aria-label="Explore Agentic Datasets" className="mt-9 flex flex-wrap gap-2.5">
        {NAV.map((n, i) => {
          const external = n.href.startsWith('http')
          return (
            <a
              key={n.href}
              href={n.href}
              className={`hero-link${i === 0 ? ' hero-link-primary' : ''}`}
            >
              <span>{n.label}</span>
              <span aria-hidden="true" className="hero-link-arrow">
                {external ? '↗' : '→'}
              </span>
            </a>
          )
        })}
      </nav>
    </header>
  )
}
