// This script generates config/config.env from environment variables on Render
const fs = require("fs");
const path = require("path");

const envPath = path.join(__dirname, "config/config.env");

// Only create if it doesn't already exist (don't overwrite local dev file)
if (!fs.existsSync(envPath)) {
  const content = `PORT = ${process.env.PORT || 4000}
NODE_ENV = ${process.env.NODE_ENV || "PRODUCTION"}

DB_URI = ${process.env.DB_URI || ""}
DB_LOCAL_URI = ${process.env.DB_LOCAL_URI || ""}

JWT_SECRET=${process.env.JWT_SECRET || ""}
JWT_EXPIRES_TIME=${process.env.JWT_EXPIRES_TIME || 90}

CLOUDINARY_CLOUD_NAME=${process.env.CLOUDINARY_CLOUD_NAME || ""}
CLOUDINARY_API_KEY=${process.env.CLOUDINARY_API_KEY || ""}
CLOUDINARY_API_SECRET=${process.env.CLOUDINARY_API_SECRET || ""}

EMAIL_USERNAME=${process.env.EMAIL_USERNAME || ""}
EMAIL_PASSWORD=${process.env.EMAIL_PASSWORD || ""}
EMAIL_HOST=${process.env.EMAIL_HOST || ""}
EMAIL_PORT=${process.env.EMAIL_PORT || ""}
EMAIL_FROM=${process.env.EMAIL_FROM || ""}

FRONTEND_URL=${process.env.FRONTEND_URL || ""}

STRIPE_SECRET_KEY=${process.env.STRIPE_SECRET_KEY || ""}
STRIPE_API_KEY=${process.env.STRIPE_API_KEY || ""}
`;

  fs.writeFileSync(envPath, content);
  console.log("✅ config/config.env created from environment variables.");
} else {
  console.log("config/config.env already exists, skipping creation.");
}
