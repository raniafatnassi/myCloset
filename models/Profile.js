const mongoose = require("mongoose");

const ProfileSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },

  location: {
    type: String,
  },

  phoneNumber: {
    type: String,
  },

  job: {
    type: String,
  },
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
