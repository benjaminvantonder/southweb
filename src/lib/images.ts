/**
 * Build a width-descriptor srcset for the responsive JPEG variants generated in
 * public/images. The original file is the largest candidate, so browsers only
 * download what the layout actually needs.
 */
export function buildSrcSet(src: string, originalWidth: number): string {
  const widths = [480, 800, 1200].filter((width) => width < originalWidth)
  const entries = widths.map(
    (width) => `${src.replace(/\.jpe?g$/i, `-${width}.jpg`)} ${width}w`,
  )

  entries.push(`${src} ${originalWidth}w`)

  return entries.join(', ')
}
