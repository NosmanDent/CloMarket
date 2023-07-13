const Market = require("../models/marketModel");
const mongoose = require("mongoose");

// get all markets category
const getMarketsByCategory = async (req, res) => {
  const { category } = req.params;

  try {
    let query = {};

    if (category !== "all") {
      query = { category };
    }

    const markets = await Market.find(query).sort({ createdAt: -1 });
    res.status(200).json(markets);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get all markets
const getMarkets = async (req, res) => {
  const markets = await Market.find({}).sort({ createdAt: -1 });

  res.status(200).json(markets);
};

// get a single market
const getMarket = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such market" });
  }

  const market = await Market.findById(id);

  if (!market) {
    return res.status(404).json({ error: "No such market" });
  }

  res.status(200).json(market);
};

// create a new market
const createMarket = async (req, res) => {
  const { title, desp, category, price, condition, brand, email, phoneNumber } =
    req.body;

  // Retrieve the uploaded image data
  const imgData = req.file.buffer.toString("base64"); // Convert buffer to Base64-encoded string
  const contentType = req.file.mimetype;

  // add to the database
  try {
    const market = await Market.create({
      title,
      img: `data:${contentType};base64,${imgData}`, // Save the Base64-encoded image string with the data URL
      desp,
      category,
      price,
      condition,
      brand,
      email,
      phoneNumber,
    });
    res.status(200).json(market);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a market
const deleteMarket = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such market" });
  }

  const market = await Market.findOneAndDelete({ _id: id });

  if (!market) {
    return res.status(400).json({ error: "No such market" });
  }

  res.status(200).json(market);
};

// update a market
const updateMarket = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such market" });
  }

  try {
    let updatedData = req.body;

    // Retrieve the uploaded image data (if any)
    const imgData = req.file ? req.file.buffer.toString("base64") : undefined; // Convert buffer to Base64-encoded string
    const contentType = req.file ? req.file.mimetype : undefined;

    // If image data is available, update the img field
    if (imgData && contentType) {
      updatedData = {
        ...updatedData,
        img: `data:${contentType};base64,${imgData}`, // Save the Base64-encoded image string with the data URL
      };
    }

    const market = await Market.findOneAndUpdate(
      { _id: id },
      { $set: updatedData },
      { new: true }
    );

    if (!market) {
      return res.status(400).json({ error: "No such market" });
    }

    res.status(200).json(market);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getMarkets,
  getMarket,
  createMarket,
  deleteMarket,
  updateMarket,
  getMarketsByCategory,
};
