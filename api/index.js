const express = require("express");
const cors = require("cors");
require("dotenv").config();

const productRouter = require("../routes/productRoute");

const app = express();
const PORT = process.env.PORT;
const connectDB = require("../connectMongo");

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("welcome to the express server");
});
app.get("/users", (req, res) => {
  res.send({
    users: [
      { id: 1, name: "x" },
      { id: 2, name: "y" },
    ],
  });
});
app.use("/products", productRouter);


app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
  connectDB();
});

module.exports = app;
