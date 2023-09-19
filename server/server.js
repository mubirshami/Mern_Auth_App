const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const workoutRoutes = require("./routes/workout");

const app = express();

const port = process.env.PORT;

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.use("/api/workout", workoutRoutes);

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("DB Connected");
    app.listen(port);
  })
  .catch((error) => {
    console.log(error);
  });
