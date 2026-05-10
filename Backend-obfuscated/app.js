const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cloudinary = require("cloudinary");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const errorMiddleware = require("./middlewares/errors");
const fixCookies = require("./middlewares/cookieFix");

// CORS — allow Vercel frontend with credentials
const frontendUrl = (process.env.FRONTEND_URL || "").replace(/"/g, "").replace(/\r?\n/g, "").replace(/\/$/, "").trim();
console.log("CORS origin set to:", frontendUrl);

app.use(
  cors({
    origin: frontendUrl,
    credentials: true,
  })
);

app.use(fixCookies);

app.use(express.json({ limit: "30kb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Routes
const foodRouter = require("./routes/foodItem");
const restaurant = require("./routes/restaurant");
const menuRouter = require("./routes/menu");
const coupon = require("./routes/couponRoutes");
const order = require("./routes/order");
const auth = require("./routes/auth");
const payment = require("./routes/payment");
const cart = require("./routes/cart");

app.use("/api/v1/eats", foodRouter);
app.use("/api/v1/eats/menus", menuRouter);
app.use("/api/v1/eats/stores", restaurant);
app.use("/api/v1/eats/orders", order);
app.use("/api/v1/users", auth);
app.use("/api/v1", payment);
app.use("/api/v1/coupon", coupon);
app.use("/api/v1/eats/cart", cart);

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "view"));

// Handle unknown routes
app.all("*", (req, res) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

app.use(errorMiddleware);

module.exports = app;
