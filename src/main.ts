import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/database";
import productRoutes from "./routes/ProductRoute";

dotenv.config();

const app = express();

app.use(express.json());

// connect database
connectDB();

// routes
app.use("/api", productRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});