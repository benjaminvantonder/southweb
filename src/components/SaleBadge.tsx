import { useState } from 'react'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import { SALE } from '../lib/site'

const STORAGE_KEY = 'southweb-dismissed-debut-sale'

function readDismissed() {
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) === '1'
  } catch {
    return false
  }
}

function storeDismissed() {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, '1')
  } catch {
    /* session storage can be unavailable in private modes */
  }
}

export function SaleBadge() {
  const [visible, setVisible] = useState(() => !readDismissed())

  if (!visible) return null

  function dismiss() {
    storeDismissed()
    setVisible(false)
  }

  return (
    <div className="fixed bottom-3 left-3 z-[55] max-w-[calc(100vw-1.5rem)] sm:bottom-5 sm:left-5">
      <div className="relative flex items-center border-2 border-ink bg-lime py-2.5 pr-9 pl-2.5 shadow-hard">
        <Link to="/pricing" className="flex min-w-0 items-center gap-3">
          <span
            className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-orange font-display text-[0.8rem] leading-none text-ink"
            aria-hidden="true"
          >
            50%
          </span>
          <span className="min-w-0">
            <span className="mono-label block text-[0.55rem] text-ink/70">{SALE.eyebrow}</span>
            <span className="display mt-1 block text-[1.05rem] leading-none text-ink">
              First 10 clients
            </span>
          </span>
        </Link>

        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss debut sale notice"
          className="absolute top-1.5 right-1.5 flex size-6 items-center justify-center rounded-full border-2 border-ink bg-cream text-ink transition-colors hover:bg-ink hover:text-cream"
        >
          <X className="size-3" strokeWidth={3} aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
