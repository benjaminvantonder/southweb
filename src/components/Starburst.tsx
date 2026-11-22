type StarburstProps = {
  className?: string
}

const POINTS =
  '50,2 54.66,32.61 74,8.43 62.73,37.27 91.57,26 67.39,45.34 98,50 67.39,54.66 91.57,74 62.73,62.73 74,91.57 54.66,67.39 50,98 45.34,67.39 26,91.57 37.27,62.73 8.43,74 32.61,54.66 2,50 32.61,45.34 8.43,26 37.27,37.27 26,8.43 45.34,32.61'

/** A 12-point starburst used as a separator and as a hero badge. */
export function Starburst({ className }: StarburstProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <polygon points={POINTS} fill="currentColor" />
    </svg>
  )
}
