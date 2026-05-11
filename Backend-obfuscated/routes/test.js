const express = require("express");
const router = express.Router();
const { Resend } = require("resend");

router.get("/test-email", async (req, res) => {
  try {
    console.log("RESEND_API_KEY:", process.env.RESEND_API_KEY ? "SET" : "NOT SET");

    const resend = new Resend(process.env.RESEND_API_KEY);
    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "ksrujan461@gmail.com",
      subject: "Test Email from OrderIt",
      html: "<p>Email is working!</p>",
    });

    res.json({ success: true, result });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
