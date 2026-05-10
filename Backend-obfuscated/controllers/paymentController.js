const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.processPayment = catchAsyncErrors(async (req, res, next) => {
  const { items: rawItems, Menuitems, restaurant } = req.body;
  const items = rawItems || Menuitems;

  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ message: "No items provided", receivedBody: req.body });
  }

  // Strip trailing slash from FRONTEND_URL
  const frontendUrl = (process.env.FRONTEND_URL || "").replace(/\/$/, "");
  console.log("FRONTEND_URL raw:", process.env.FRONTEND_URL);
  console.log("frontendUrl cleaned:", frontendUrl);
  console.log("success_url:", `${frontendUrl}/success?session_id={CHECKOUT_SESSION_ID}`);

  try {
    const session = await stripe.checkout.sessions.create({
      phone_number_collection: { enabled: true },
      line_items: items.map((item) => ({
        price_data: {
          currency: "inr",
          product_data: {
            name: item.foodItem.name,
            images: [item.foodItem.images[0].url],
          },
          unit_amount: item.foodItem.price * 100,
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      shipping_address_collection: { allowed_countries: ["US", "IN"] },
      shipping_options: [
        {
          shipping_rate_data: {
            display_name: "Delivery Charges",
            type: "fixed_amount",
            fixed_amount: { amount: 5500, currency: "inr" },
            delivery_estimate: {
              minimum: { unit: "hour", value: 1 },
              maximum: { unit: "hour", value: 3 },
            },
          },
        },
      ],
      success_url: `${frontendUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${frontendUrl}/cart`,
    });

    res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("Stripe error:", err.message);
    res.status(400).json({ message: err.message });
  }
});

exports.sendStripApi = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({
    stripeApiKey: process.env.STRIPE_API_KEY,
  });
});
