import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const root = 'dist/client';
const origin = 'https://cantalyalojistik.com';
const previousRoutes = ['/', '/ambar-nakliye', '/antalya-nakliye', '/evden-eve-nakliyat', '/gizlilik', '/paletli-yuk-tasima', '/parca-esya-tasima', '/parsiyel-nakliye', '/sehirler-arasi-nakliye', '/ticari-yuk-tasima'];
const newRoutes = ['/antalya-parca-esya-tasima', '/asansorlu-evden-eve-nakliyat'];
// With trailingSlash: false, /service maps to service.html; /service/ is not an alias.
const routeFile = (pathname) => join(root, pathname === '/' ? 'index.html' : `${pathname.replace(/^\//, '')}.html`);
const sitemap = readFileSync(join(root, 'sitemap.xml'), 'utf8');
const sitemapUrls = [...sitemap.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)].map((match) => match[1]);
assert(sitemapUrls.length > 0, 'Sitemap has no URLs');
assert.equal(new Set(sitemapUrls).size, sitemapUrls.length, 'Duplicate sitemap URLs');
for (const loc of sitemapUrls) {
  const url = new URL(loc);
  assert.equal(url.origin, origin, `Wrong sitemap origin ${loc}`);
  assert(!url.search && !url.hash, `Sitemap URL must not have query or fragment ${loc}`);
  assert(url.pathname === '/' || !url.pathname.endsWith('/'), `Noncanonical trailing slash in sitemap ${loc}`);
  const destination = routeFile(url.pathname);
  assert(existsSync(destination), `Missing sitemap destination ${loc}`);
  const html = readFileSync(destination, 'utf8');
  const canonical = html.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/);
  assert(canonical, `Missing canonical for sitemap URL ${loc}`);
  assert.equal(new URL(canonical[1]).href, url.href, `Sitemap/canonical mismatch ${loc}`);
}
for (const path of [...previousRoutes, ...newRoutes]) {
  assert(existsSync(routeFile(path)), `Missing route ${path}`);
  assert(sitemapUrls.includes(`${origin}${path}`), `Missing exact sitemap entry ${path}`);
}
let linkCount = 0;
const homeHtml = readFileSync(routeFile('/'), 'utf8');
assert(homeHtml.includes('Antalya Şehir İçi ve Şehirler Arası'), 'Homepage must include intercity home moving');
assert(homeHtml.includes('Profesyonel Evden Eve Nakliyat'), 'Homepage must include professional home moving');
for (const path of ['/', '/evden-eve-nakliyat', '/antalya-parca-esya-tasima', '/asansorlu-evden-eve-nakliyat']) {
  const html = readFileSync(routeFile(path), 'utf8');
  assert(html.includes('Aksu') && html.includes('Serik'), `Missing Antalya service examples ${path}`);
  assert(!/dört ilçede/i.test(html), `Outdated four-district restriction ${path}`);
  assert(html.includes('hero-media'), `Missing moving photo background ${path}`);
  assert(html.includes('temsili hizmet görseli'), `Missing representative-image disclosure ${path}`);
  assert(html.includes('fetchPriority="high"') || html.includes('fetchpriority="high"'), `Missing priority hero image ${path}`);
}
for (const file of readdirSync(root).filter((file) => file.endsWith('.html') && file !== '404.html')) {
  const html = readFileSync(join(root, file), 'utf8');
  const route = file === 'index.html' ? '/' : `/${file.slice(0, -5)}`;
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `H1 count ${route}`);
  assert(html.includes('name="description"'), `Missing description ${route}`);
  assert(html.includes(`rel="canonical" href="${origin}${route === '/' ? '/' : route}"`) || html.includes(`rel="canonical" href="${origin}${route === '/' ? '' : route}"`), `Wrong canonical ${route}`);
  assert(!html.includes('instagram.com/cantalyanakliyat'), `Wrong brand association ${route}`);
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) JSON.parse(match[1]);
  for (const [, src] of html.matchAll(/<img\b[^>]*src="([^"]+)"/g)) {
    if (src.startsWith('/')) assert(existsSync(join(root, src.slice(1))), `Missing image ${route} -> ${src}`);
  }
  for (const [, srcSet] of html.matchAll(/<img\b[^>]*src[Ss]et="([^"]+)"/g)) {
    for (const candidate of srcSet.split(',')) {
      const src = candidate.trim().split(/\s+/)[0];
      if (src.startsWith('/')) assert(existsSync(join(root, src.slice(1))), `Missing responsive image ${route} -> ${src}`);
    }
  }
  for (const [, href] of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    const url = new URL(href.replaceAll('&amp;', '&'), `${origin}${route}`);
    if (url.origin !== origin) continue;
    const destination = routeFile(url.pathname);
    assert(existsSync(destination), `Broken link ${route} -> ${url.pathname}`);
    if (url.hash) {
      const target = readFileSync(destination, 'utf8');
      assert(target.includes(`id="${url.hash.slice(1)}"`), `Missing anchor ${href}`);
    }
    linkCount++;
  }
}
console.log(`PASS: ${previousRoutes.length} existing + ${newRoutes.length} new pages; ${linkCount} internal links; H1, metadata, JSON-LD and ${sitemapUrls.length} exact sitemap/canonical checks.`);
