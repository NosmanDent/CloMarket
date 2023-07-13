// server.js

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");

const marketRoutes = require("./routes/markets");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.use("/api/markets", upload.single("img"), marketRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to database");
    app.listen(process.env.PORT, () => {
      console.log("listening for requests on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
