/* eslint-disable react-refresh/only-export-components -- build-time SSR entry, not a component module */
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App'
import { buildHeadHtml, getRouteSeo } from './lib/seo'

export { SEO_ROUTES, buildSitemapXml } from './lib/seo'

/** Render one route to static HTML plus its head block. */
export function render(pathname: string) {
  const appHtml = renderToString(
    <StaticRouter location={pathname}>
      <App />
    </StaticRouter>,
  )

  return {
    appHtml,
    headHtml: buildHeadHtml(getRouteSeo(pathname)),
  }
}
