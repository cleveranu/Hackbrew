const mongoose = require("mongoose");

module.exports = async () => {
  try {
    // Use await to ensure the connection is established before proceeding
    await mongoose.connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database successfully");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    process.exit(1); // Exit the process if the connection fails
  }
};
