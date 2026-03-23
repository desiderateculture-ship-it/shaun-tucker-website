/**
 * Netlify Serverless Function: podcast-rss
 * Proxies the Riverside RSS feed server-side to avoid CORS issues.
 * Endpoint: /.netlify/functions/podcast-rss
 * Caches response for 5 minutes via Cache-Control header.
 */

const RSS_URL = "https://api.riverside.fm/hosting/bu3Fo09E.rss";

exports.handler = async function (event, context) {
  try {
    const response = await fetch(RSS_URL, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; ShaunTuckerWebsite/1.0)",
        "Accept": "application/rss+xml, application/xml, text/xml, */*",
      },
    });

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: `RSS feed returned ${response.status}` }),
        headers: { "Content-Type": "application/json" },
      };
    }

    const xml = await response.text();

    return {
      statusCode: 200,
      body: xml,
      headers: {
        "Content-Type": "application/rss+xml; charset=utf-8",
        // Allow browser to cache for 5 minutes, CDN for 10 minutes
        "Cache-Control": "public, max-age=300, s-maxage=600",
        // Allow any origin to call this function
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
  }
};
