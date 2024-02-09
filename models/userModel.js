const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: String,
  settings: {
    preferredTheme: {
      type: String,
      enum: ["light", "dark", "system"],
      default: "system",
    },
    resultsPerPage: {
      type: Number,
      min: 20,
      max: 100,
      default: 20,
    },
    sendEmail: {
      type: Boolean,
      default: true,
    },
  },
});

module.exports = mongoose.model("User", userSchema);
