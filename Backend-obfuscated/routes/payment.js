const express = require("express");
const router = express.Router();
const { processPayment, sendStripApi } = require("../controllers/paymentController");

// Remove protect middleware - payment is handled by Stripe securely
router.route("/payment/process").post(processPayment);
router.route("/stripeapi").get(sendStripApi);

module.exports = router;
