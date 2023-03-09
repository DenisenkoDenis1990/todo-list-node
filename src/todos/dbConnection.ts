import mongoose from "mongoose";

export const connectMongo = async () => {
  console.log("database connected");
  return mongoose.connect(process.env.MONGO_URL);
};
