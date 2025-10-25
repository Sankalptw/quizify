import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI!;

export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(MONGO_URI, { dbName: "quizify" });
      console.log("✅ MongoDB connected successfully");
    } else {
      console.log("⚙️ Using existing MongoDB connection");
    }
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  }
};