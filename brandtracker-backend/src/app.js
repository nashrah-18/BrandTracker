const express = require("express");
const cors = require("cors");

const queryRoutes = require("./routes/queryRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/queries", queryRoutes);

app.get("/", (req, res) => {
  res.send("BrandTracker Backend is running 🚀");
});

module.exports = app;
