require("dotenv").config();
const express = require("express");
const app = express();

const connectDB = require("./db/db");

var cors = require("cors");
const authRoute = require("./Routes/auth");

app.use(cors());

app.use(express.json());
app.use("/api/v1/auth/", authRoute);
const start = () => {
  try {
    connectDB(process.env.MONGO_URI);
    console.log("Connected..");
  } catch (error) {
    console.log(error);
  }
};

app.listen(8000, () => {
  start();
});
