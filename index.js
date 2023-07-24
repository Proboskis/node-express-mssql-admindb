"use strict";
const express = require("express");
const config = require("./config");
const cors = require("cors");
// const bodyParser = require('body-parser'); bodyParser is depricated
const predmetRoutes = require("./routes/predmetRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", predmetRoutes.routes);

app.listen(config.port, () =>
  console.log("Server is running on http://localhost:" + config.port)
);
