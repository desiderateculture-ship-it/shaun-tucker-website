exports.handler = async (event, context) => {
  try {
    const rssUrl = 'https://api.riverside.fm/hosting/bu3Fo09E.rss';
    
    const response = await fetch(rssUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch RSS: ${response.status}`);
    }
    
    const body = await response.text();
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/rss+xml; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Cache-Control': 'public, max-age=300'
      },
      body: body
    };
  } catch (error) {
    console.error('RSS Proxy Error:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ error: error.message })
    };
  }
};
