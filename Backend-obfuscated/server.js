const fs = require("fs");
const path = require("path");

// Load .env file only if it exists (local dev). On Render, env vars are injected directly.
const envPath = path.join(__dirname, "config/config.env");
if (fs.existsSync(envPath)) {
  require("dotenv").config({ path: envPath });
  console.log("Loaded config from config.env");
} else {
  console.log("No config.env found — using environment variables from host.");
}

const app = require("./app");
const connectDatabase = require("./config/database");
const cloudinary = require("cloudinary");

// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log("ERROR: " + err.stack);
  console.log("Shutting down server due to uncaught exception");
  process.exit(1);
});

// Connect to database
connectDatabase();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Start server
const server = app.listen(process.env.PORT || 4000, () => {
  console.log(
    `Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.log("ERROR: " + err.message);
  console.log("Shutting down the server due to Unhandled Promise rejection");
  server.close(() => {
    process.exit(1);
  });
});
