const APEX = 'shauntucker.com.au';
const RSS_FEED = 'https://api.riverside.fm/hosting/bu3Fo09E.rss';

// Legacy URLs from the previous site. Everything maps to the single page.
const LEGACY = new Set([
  '/podcast', '/community', '/7-day-reset', '/7-day-reset-confirm',
  '/about', '/contact', '/coaching', '/blog', '/services',
  '/work-with-me', '/book-a-call', '/home'
]);

const ASSET_EXT = /\.[a-z0-9]{2,5}$/i;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.protocol === 'http:') {
      url.protocol = 'https:';
      return Response.redirect(url.toString(), 301);
    }

    // Checked before the www rule so an old www URL lands in one hop, not two.
    // /podcast.html and /podcast are the same legacy URL.
    const path = url.pathname.replace(/\.html$/i, '').replace(/\/+$/, '') || '/';
    if (LEGACY.has(path.toLowerCase())) {
      return Response.redirect('https://' + APEX + '/', 301);
    }

    if (url.hostname === 'www.' + APEX) {
      url.hostname = APEX;
      return Response.redirect(url.toString(), 301);
    }

    if (url.pathname === '/api/rss') {
      return rss();
    }

    const response = await env.ASSETS.fetch(request);

    // A missing page is an old indexed URL, so send it to the one door.
    // A missing file stays a 404 so broken assets are still visible.
    if (response.status === 404 && !ASSET_EXT.test(url.pathname)) {
      return Response.redirect('https://' + APEX + '/', 301);
    }

    return response;
  }
};

async function rss() {
  try {
    const upstream = await fetch(RSS_FEED, { cf: { cacheTtl: 300, cacheEverything: true } });
    if (!upstream.ok) throw new Error('Feed responded ' + upstream.status);
    return new Response(await upstream.text(), {
      headers: {
        'Content-Type': 'application/rss+xml; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=300'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch RSS feed' }), {
      status: 502,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }
}
