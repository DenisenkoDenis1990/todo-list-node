import mongoose from "mongoose";
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: { type: String, require: true },
  firstName: String,
  lastName: String,
});

userSchema.pre("save", async function () {
  if (this.isNew) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});
export const User = mongoose.model("User", userSchema);
