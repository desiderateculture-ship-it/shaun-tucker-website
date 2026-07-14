exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { firstName, email, marketingOptIn } = JSON.parse(event.body);

    // Validate inputs
    if (!firstName || !email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    // Get GHL API key from environment variable
    const ghlApiKey = process.env.GHL_API_KEY;
    const locationId = process.env.GHL_LOCATION_ID;

    if (!ghlApiKey || !locationId) {
      console.error('Missing GHL configuration');
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Server configuration error' })
      };
    }

    // Create contact in GHL
    const tags = ['7-day-reset', 'podcast-cta'];
    if (marketingOptIn) {
      tags.push('marketing-opted-in');
    }
    
    const ghlResponse = await fetch('https://rest.gohighlevel.com/v1/contacts/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${ghlApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: firstName,
        email: email,
        locationId: locationId,
        source: '7-Day Integrity Reset',
        tags: tags
      })
    });

    if (!ghlResponse.ok) {
      const errorData = await ghlResponse.text();
      console.error('GHL API error:', errorData);
      throw new Error(`GHL API returned ${ghlResponse.status}`);
    }

    const contactData = await ghlResponse.json();
    console.log('Contact created in GHL:', contactData);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        success: true,
        message: 'Successfully subscribed to 7-Day Integrity Reset',
        contactId: contactData.contact?.id
      })
    };

  } catch (error) {
    console.error('Error in ghl-subscribe:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Failed to process subscription',
        details: error.message
      })
    };
  }
};
