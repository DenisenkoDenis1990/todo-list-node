import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  text: { type: String, require: true },
  userId: { type: String, require: true },
  resolved: {
    type: Boolean,
    default: false,
  },
});

export const Todos = mongoose.model("Todos", todoSchema);
