import Mark from './Mark'
import ThemeToggle from './ThemeToggle'
import { ORG } from '../data'

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
      <p className="mt-5 text-lg leading-relaxed" style={{ color: 'var(--ink-muted)' }}>
        {ORG.tagline}
      </p>
      <nav className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        <a href={ORG.showcase}>Showcases</a>
        <a href={ORG.docs}>Reference documentation</a>
        <a href={ORG.github}>Repositories on GitHub</a>
        <a href="#status">Status</a>
      </nav>
    </header>
  )
}
