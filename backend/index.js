
require("dotenv").config();
const config = require("./config.json");
const mongoose = require("mongoose");

// mongoose.connect(config.connectionString);
mongoose.connect(config.connectionString).then(()=>{
  console.log("Connected to MongoDB");
}).catch((err)=>{
  console.log("Error connecting to MongoDB")
})

const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors({ 
  origin: "*"
 }));

app.get("/", (req, res) => {
  res.json({ data: "Hey" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
