import type { ReactNode } from 'react'

/**
 * A section is a short uppercase kicker plus an optional full heading. The
 * kicker alone was enough while every section was named for a noun
 * ("Definition", "Measured"); the headings the page now carries are sentences,
 * and a sentence set in 12px uppercase letterspacing is unreadable. So the
 * kicker stays as the rail the eye scans and the heading carries the words.
 */
export default function Section({
  id,
  kicker,
  heading,
  children,
  alt = false,
}: {
  id: string
  kicker: string
  heading?: string
  children: ReactNode
  alt?: boolean
}) {
  return (
    <section
      id={id}
      style={alt ? { background: 'var(--ground-alt)' } : undefined}
      className="border-t"
    >
      <div className="mx-auto w-full max-w-prose px-6 py-14 sm:py-20">
        <h2
          className="text-xs font-semibold uppercase tracking-[0.18em]"
          style={{ color: 'var(--ink-faint)' }}
        >
          {kicker}
        </h2>
        {heading ? (
          <p className="mb-6 mt-4 text-2xl font-semibold tracking-tight">{heading}</p>
        ) : (
          <div className="mb-6" />
        )}
        {children}
      </div>
    </section>
  )
}
