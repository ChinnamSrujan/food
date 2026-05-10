const mongoose = require("mongoose");

const connectDatabase = () => {
  // Use Atlas URI in production, local URI in development
  const uri =
    process.env.NODE_ENV === "PRODUCTION"
      ? process.env.DB_URI
      : process.env.DB_URI || process.env.DB_LOCAL_URI;

  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
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
