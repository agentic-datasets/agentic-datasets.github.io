import type { ReactNode } from 'react'

/**
 * A section is its heading and its content, nothing else. The earlier version
 * carried a short uppercase kicker above the heading; the kickers were labels
 * invented here rather than anything the author wrote, so they are gone.
 */
export default function Section({
  id,
  heading,
  children,
  alt = false,
}: {
  id: string
  heading: string
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
        <h2 className="mb-6 text-2xl font-semibold tracking-tight">{heading}</h2>
        {children}
      </div>
    </section>
  )
}
