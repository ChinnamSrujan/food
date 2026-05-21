const Order = require("../models/order");
const Cart = require("../models/cartModel");
const { ObjectId } = require("mongodb");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.newOrder = catchAsyncErrors(async (req, res, next) => {
  const { session_id } = req.body;

  // Retrieve Stripe session with line items and customer details
  const session = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items"],
  });

  console.log("Stripe session payment_status:", session.payment_status);

  if (session.payment_status !== "paid") {
    return next(new ErrorHandler("Payment not completed", 400));
  }

  // Get cart from DB using logged-in user
  const cart = await Cart.findOne({ user: req.user._id })
    .populate({ path: "items.foodItem", select: "name price images" })
    .populate({ path: "restaurant", select: "name" });

  if (!cart) {
    return next(new ErrorHandler("Cart not found", 404));
  }

  const orderItems = cart.items.map((item) => ({
    name: item.foodItem.name,
    quantity: item.quantity,
    image: item.foodItem.images[0].url,
    price: item.foodItem.price,
    fooditem: item.foodItem._id,
  }));

  const deliveryInfo = {
    address: session.shipping_details?.address?.line1 || "N/A",
    city: session.shipping_details?.address?.city || "N/A",
    phoneNo: session.customer_details?.phone || "N/A",
    postalCode: session.shipping_details?.address?.postal_code || "N/A",
    country: session.shipping_details?.address?.country || "IN",
  };

  const paymentInfo = {
    id: session.payment_intent,
    status: session.payment_status,
  };

  const order = await Order.create({
    orderItems,
    deliveryInfo,
    paymentInfo,
    deliveryCharge: session.shipping_cost?.amount_total / 100 || 0,
    itemsPrice: session.amount_subtotal / 100,
    finalTotal: session.amount_total / 100,
    user: req.user.id,
    restaurant: cart.restaurant._id,
    paidAt: Date.now(),
  });

  // Clear cart after order
  await Cart.findOneAndDelete({ user: req.user._id });

  res.status(200).json({ success: true, order });
});

exports.getSingleOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id)
    .populate("user", "name email")
    .populate("restaurant")
    .exec();

  if (!order) return next(new ErrorHandler("No Order found with this ID", 404));

  res.status(200).json({ success: true, order });
});

exports.myOrders = catchAsyncErrors(async (req, res, next) => {
  const userId = new ObjectId(req.user.id);
  const orders = await Order.find({ user: userId })
    .populate("user", "name email")
    .populate("restaurant")
    .exec();

  res.status(200).json({ success: true, orders });
});

exports.allOrders = catchAsyncErrors(async (req, res, next) => {
  const orders = await Order.find();
  let totalAmount = 0;
  orders.forEach((order) => { totalAmount += order.finalTotal; });
  res.status(200).json({ success: true, totalAmount, orders });
});
