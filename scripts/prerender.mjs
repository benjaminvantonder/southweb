import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { pathToFileURL } from 'node:url'

const root = process.cwd()
const distDir = join(root, 'dist')
const ssrDir = join(root, '.ssr')
const templatePath = join(distDir, 'index.html')

async function findServerEntry() {
  // The plain Vite SSR build writes `.ssr/entry-server.js`, while the Cloudflare
  // Vite plugin (if it is ever enabled) writes `.ssr/assets/entry-server-*.js`.
  // Search the whole output directory so either layout works.
  const files = await readdir(ssrDir, { recursive: true })
  const entry = files.find((file) => /(^|[\\/])entry-server[^\\/]*\.(js|mjs)$/.test(file))

  if (!entry) {
    throw new Error(`Could not find the SSR entry in ${ssrDir}`)
  }

  return join(ssrDir, entry)
}

const serverEntry = await findServerEntry()
const { render, SEO_ROUTES, buildSitemapXml } = await import(pathToFileURL(serverEntry).href)

const template = await readFile(templatePath, 'utf8')
const seoBlock = /<!--seo:start-->[\s\S]*?<!--seo:end-->/
const rootBlock = '<div id="root"></div>'

if (!seoBlock.test(template)) {
  throw new Error('index.html is missing the <!--seo:start--> / <!--seo:end--> markers')
}

if (!template.includes(rootBlock)) {
  throw new Error('index.html is missing the empty <div id="root"></div> mount point')
}

function buildPage(route) {
  const { appHtml, headHtml } = render(route)

  return template
    .replace(seoBlock, `<!--seo:start-->\n${headHtml}\n    <!--seo:end-->`)
    .replace(rootBlock, `<div id="root">${appHtml}</div>`)
}

const routes = Object.keys(SEO_ROUTES)

for (const route of routes) {
  const html = buildPage(route)
  const outputPath =
    route === '/' ? templatePath : join(distDir, route.replace(/^\//, ''), 'index.html')

  await mkdir(dirname(outputPath), { recursive: true })
  await writeFile(outputPath, html)
  console.log(`prerendered ${route}`)
}

// Cloudflare Pages serves this file (with a real 404 status) for unknown paths.
const notFoundHtml = buildPage('/404')
await writeFile(join(distDir, '404.html'), notFoundHtml)
console.log('prerendered /404')

await writeFile(join(distDir, 'sitemap.xml'), buildSitemapXml())
console.log('wrote sitemap.xml')

await rm(ssrDir, { recursive: true, force: true })
