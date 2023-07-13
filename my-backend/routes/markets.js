const express = require("express");
const {
  getMarkets,
  getMarket,
  createMarket,
  deleteMarket,
  updateMarket,
  getMarketsByCategory,
} = require("../controllers/marketController");

const router = express.Router();

// GET all Markets
router.get("/", getMarkets);

// GET a single Market
router.get("/:id", getMarket);

// GET all Markets by category
router.get("/category/:category", getMarketsByCategory);

// POST a new Market
router.post("/", createMarket);

// DELETE a Market
router.delete("/:id", deleteMarket);

// UPDATE a Market
router.patch("/:id", updateMarket);

module.exports = router;
