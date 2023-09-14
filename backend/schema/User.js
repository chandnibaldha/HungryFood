const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  restaurant: {
    type: String,
  },
  user:{
    type:String
  },
  date: {
    type: Date,
    default: Date.new,
  },
});

module.exports = mongoose.model("user", userSchema);
