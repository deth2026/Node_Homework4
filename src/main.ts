import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./infrastructure/database/connectDB";

import productRoutes from "./presentation/routes/productRoutes";

dotenv.config();

const app = express();

app.use(express.json());

// Database
connectDB();

// Routes
app.use("/api", productRoutes);

app.get("/", (req, res) => {
  res.send("Clean Architecture API Running 🚀");
});

// Server
app.listen(process.env.PORT, () => {
  console.log(
    `Server running on http://localhost:${process.env.PORT}`
  );
});