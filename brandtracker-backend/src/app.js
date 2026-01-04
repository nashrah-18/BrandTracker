const express = require("express");
const cors = require("cors");

// Routes
const queryRoutes = require("./routes/queryRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/queries", queryRoutes);
app.use("/api/products", productRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("BrandTracker Backend is running 🚀");
});

module.exports = app;
