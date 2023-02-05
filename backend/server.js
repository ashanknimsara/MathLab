const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.jason());

const URL = process.env.MONGODB_URL; // mongoDB URL

mongoose.connect(URL, {});

const connection = mongoose.connection; //mongoDB connection
connection.once("open", () => {
  console.log("MongoDB Database Connection Successfull"); //Display in console if
});