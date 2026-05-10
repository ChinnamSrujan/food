const mongoose = require("mongoose");

const connectDatabase = () => {
  const uri = process.env.DB_URI || process.env.DB_LOCAL_URI;

  if (!uri) {
    console.error("ERROR: No database URI found. Set DB_URI environment variable.");
    process.exit(1);
  }

  // Debug: log first 20 chars to verify URI format without exposing credentials
  console.log("Connecting to DB, URI starts with:", uri.substring(0, 20));

  mongoose
    .connect(uri)
    .then((con) => {
      console.log(
        `MongoDB Database connected with HOST: ${con.connection.host}`
      );
    })
    .catch((err) => {
      console.error(`Database connection error: ${err.message}`);
      process.exit(1);
    });
};

module.exports = connectDatabase;
