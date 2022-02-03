import mongoose from "mongoose";
import crypto from "crypto";

//----- UserSchema ------//
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role",
    // required: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  // Unique identifier for authentication when signing in
  accessToken: {
    type: String,
    // required: true,
    // creates the accessToken by randomizing a string (128 is the length), hex means letters (if removed it generates symbols).
    default: () => crypto.randomBytes(128).toString("hex"),
  },
});

// User model that uses the UserSchema
const User = mongoose.model("User", UserSchema);
module.exports = User;
