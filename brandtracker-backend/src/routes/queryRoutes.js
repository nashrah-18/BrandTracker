const express = require("express");
const {
  createQuery,
  getAllQueries,
} = require("../controllers/queryController");

const router = express.Router();

router.post("/", createQuery);
router.get("/", getAllQueries);

module.exports = router;
