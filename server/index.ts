import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.json());
  app.use(express.static(staticPath));

  // Email transporter configuration
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Retreat Application API
  app.post("/api/retreat-application", async (req, res) => {
    try {
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
      } = req.body;

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
        return res.status(400).json({ error: "Missing required fields" });
      }

      // Email content for Shaun
      const adminEmailContent = `
        <h2>New Retreat Application</h2>
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

      // Email content for applicant
      const applicantEmailContent = `
        <h2>Your Retreat Application Has Been Received</h2>
        <p>Hi ${firstName},</p>
        <p>Thank you for applying to The Unforgettable Retreat. We've received your application and Shaun personally reviews every submission.</p>
        <p>You'll hear back within 48 hours.</p>
        <p>In the meantime, join the free Sunday workouts or explore the breathwork sessions to get a feel for the community.</p>
        <p>Best,<br />Shaun Tucker</p>
      `;

      // Log to console for debugging
      console.log("New Retreat Application Received:", { firstName, lastName, email });

      // Send emails in background - don't await so the response isn't blocked/failed by SMTP issues
      transporter.sendMail({
        from: process.env.SMTP_FROM || "noreply@shauntucker.com.au",
        to: "shaun@shauntucker.com.au",
        subject: `New Retreat Application: ${firstName} ${lastName}`,
        html: adminEmailContent,
      }).catch(err => console.error("Admin email failed:", err));

      transporter.sendMail({
        from: process.env.SMTP_FROM || "noreply@shauntucker.com.au",
        to: email,
        subject: "Your Retreat Application Has Been Received",
        html: applicantEmailContent,
      }).catch(err => console.error("Applicant email failed:", err));

      // Return success regardless of email status (since we've "received" it)
      res.json({ success: true, message: "Application submitted successfully" });
    } catch (error) {
      console.error("Critical error in /api/retreat-application:", error);
      res.status(500).json({
        error: "Internal server error. Please email shaun@shauntucker.com.au directly.",
      });
    }
  });

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
