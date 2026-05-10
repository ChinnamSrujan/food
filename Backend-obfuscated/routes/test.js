const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.get("/test-email", async (req, res) => {
  try {
    console.log("EMAIL_HOST:", process.env.EMAIL_HOST);
    console.log("EMAIL_PORT:", process.env.EMAIL_PORT);
    console.log("EMAIL_USERNAME:", process.env.EMAIL_USERNAME);
    console.log("EMAIL_FROM:", process.env.EMAIL_FROM);

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT),
      secure: false,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: { rejectUnauthorized: false },
    });

    await transporter.verify();
    res.json({ success: true, message: "SMTP connection verified!" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
