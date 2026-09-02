import Mark from './Mark'
import { ORG } from '../data'

export default function Hero() {
  return (
    <header className="mx-auto w-full max-w-prose px-6 pb-14 pt-16 sm:pb-20 sm:pt-24">
      {/* Clear space of at least the inner square on every side, per the brand notes. */}
      <Mark size={72} className="mb-8" />
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{ORG.name}</h1>
      <p className="mt-5 text-lg leading-relaxed" style={{ color: 'var(--ink-muted)' }}>
        {ORG.tagline}
      </p>
      <nav className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        <a href={ORG.docs}>Reference documentation</a>
        <a href={ORG.github}>Repositories on GitHub</a>
        <a href="#status">Status</a>
      </nav>
    </header>
  )
}
