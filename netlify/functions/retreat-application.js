/**
 * Netlify Serverless Function: retreat-application
 * Handles retreat application form submissions and sends email notifications via SMTP.
 * Endpoint: /.netlify/functions/retreat-application (proxied from /api/retreat-application)
 */
const nodemailer = require("nodemailer");

exports.handler = async function (event, context) {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch (e) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Invalid JSON body" }),
    };
  }

  const {
    firstName,
    lastName,
    email,
    phone,
    age,
    childrenAges,
    occupation,
    currentChallenge,
    whyRetreat,
    commitment,
    dietaryRestrictions,
    mobilityNeeds,
    additionalInfo,
  } = body;

  // Validate required fields
  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !age ||
    !childrenAges ||
    !occupation ||
    !currentChallenge ||
    !whyRetreat ||
    !commitment
  ) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Missing required fields" }),
    };
  }

  // Configure SMTP transporter using Netlify environment variables
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const adminEmailContent = `
    <h2 style="color:#1a1a1a;">New Retreat Application</h2>
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Age:</strong> ${age}</p>
    <p><strong>Children's Ages:</strong> ${childrenAges}</p>
    <p><strong>Occupation:</strong> ${occupation}</p>
    <hr />
    <h3>Application Responses</h3>
    <p><strong>Current Challenge:</strong></p>
    <p>${currentChallenge}</p>
    <p><strong>Why The Retreat:</strong></p>
    <p>${whyRetreat}</p>
    <p><strong>Commitment Level:</strong> ${commitment}</p>
    <hr />
    <h3>Additional Information</h3>
    <p><strong>Dietary Restrictions:</strong> ${dietaryRestrictions || "None specified"}</p>
    <p><strong>Mobility Needs:</strong> ${mobilityNeeds || "None specified"}</p>
    <p><strong>Additional Notes:</strong> ${additionalInfo || "None"}</p>
  `;

  const applicantEmailContent = `
    <h2 style="color:#1a1a1a;">Your Retreat Application Has Been Received</h2>
    <p>Hi ${firstName},</p>
    <p>Thank you for applying to The Unforgettable Retreat. We've received your application and Shaun personally reviews every submission.</p>
    <p>You'll hear back within 48 hours.</p>
    <p>In the meantime, join the free Sunday workouts or explore the breathwork sessions to get a feel for the community.</p>
    <p>Best,<br />Shaun Tucker</p>
    <p><a href="https://www.shauntucker.com.au">www.shauntucker.com.au</a></p>
  `;

  try {
    // Send notification to Shaun
    await transporter.sendMail({
      from: `"Shaun Tucker Website" <${process.env.SMTP_USER}>`,
      to: "shaun@shauntucker.com.au",
      subject: `New Retreat Application: ${firstName} ${lastName}`,
      html: adminEmailContent,
    });

    // Send confirmation to applicant
    await transporter.sendMail({
      from: `"Shaun Tucker" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Your Retreat Application Has Been Received",
      html: applicantEmailContent,
    });

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ success: true, message: "Application submitted successfully" }),
    };
  } catch (error) {
    console.error("Email send error:", error.message);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Failed to send email", details: error.message }),
    };
  }
};
