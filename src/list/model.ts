import mongoose from "mongoose";

const listSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  userId: { type: String, require: true },
  deleted: {
    type: Boolean,
    default: false,
  },
});

export const Lists = mongoose.model("Lists", listSchema);
