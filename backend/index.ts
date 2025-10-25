import express from "express";
import dotenv from "dotenv";
import router from "./routes/route.js";
import { connectDB } from "./config/db.js"; // 👈 Import DB connection

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use("/api", router);

// Connect to DB and start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
});