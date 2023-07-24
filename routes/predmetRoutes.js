"use strict";

const express = require("express");
const predmetController = require("../controllers/predmetController");
const router = express.Router();

const {
  getPredmeti,
  getPredmetById,
  createPredmet,
  updatePredmet,
  deletePredmet,
} = predmetController;

router.get("/predmeti", getPredmeti);
router.get("/predmeti/:id", getPredmetById);
router.post("/predmeti", createPredmet);
router.put("/predmeti/:id", updatePredmet);
router.delete("/predmeti/:id", deletePredmet);

module.exports = {
  routes: router,
};
