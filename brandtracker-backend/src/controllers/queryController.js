const Query = require("../models/Query");

// POST: Save user query
exports.createQuery = async (req, res) => {
  try {
    const { name, message } = req.body;

    if (!name || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newQuery = await Query.create({ name, message });

    res.status(201).json({
      success: true,
      data: newQuery,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET: Fetch all queries (admin use)
exports.getAllQueries = async (req, res) => {
  try {
    const queries = await Query.find().sort({ createdAt: -1 });
    res.json(queries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
