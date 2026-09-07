import { LEGAL } from '../data'

/**
 * The footer notice: a summary, and a link to the terms that govern.
 *
 * It used to carry the full warranty and liability language inline, which made
 * the longest and most forceful paragraph on the page the list of reasons not
 * to rely on the project. The substance is unchanged and now lives at
 * /legal.html; only its position on this page changed.
 *
 * The "what is not claimed" statements are research claims and belong in the
 * body of the page where they can be read. This is the legal one.
 */
export default function Disclaimer({ ownership }: { ownership: React.ReactNode }) {
  return (
    <div className="mt-6 border-t pt-6" style={{ borderColor: 'var(--rule)' }}>
      <p className="text-xs leading-relaxed" style={{ color: 'var(--ink-faint)' }}>
        {LEGAL.summary} <a href="/legal.html">Full terms</a>.
      </p>
      <p className="mt-4 text-xs leading-relaxed" style={{ color: 'var(--ink-faint)' }}>
        {ownership}
      </p>
    </div>
  )
}
