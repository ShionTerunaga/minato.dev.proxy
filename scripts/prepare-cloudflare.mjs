import { rm } from 'node:fs/promises'

// Slidev generates a Netlify-style SPA rewrite. Cloudflare Pages provides
// SPA fallback automatically and treats this rule as an infinite loop.
await rm(new URL('../dist/_redirects', import.meta.url), { force: true })
