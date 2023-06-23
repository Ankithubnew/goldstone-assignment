const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.Port || 3002;
const ConnectToDatabase = require("./Config/mongoDbConfig");
const getRoutes = require("./Routes/getRoutes");
const csvRoutes = require("./Routes/csvRoutes");
const patchRoutes = require("./Routes/patchRoutes");
const User = require("./Model/userSchema");
const { get } = require("mongoose");
const axios = require("axios");

app.use(cors());
app.use(express.json());



app.use("/api/get",getRoutes)
// app.use("/api/csv",csvRoutes);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, async () => {
  await ConnectToDatabase();
  console.log(`Server listening on port ${PORT}`);
});
