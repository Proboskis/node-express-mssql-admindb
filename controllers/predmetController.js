"use strict";

const predmetData = require("../data/Predmeti");

const getPredmeti = async (req, res, next) => {
  try {
    const predmeti = await predmetData.getPredmeti();
    res.send(predmeti);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getPredmetById = async (req, res, next) => {
  try {
    const predmetId = req.params.id;
    const jedanPredmet = await predmetData.getPredmetById(predmetId);
    res.send(jedanPredmet);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const createPredmet = async (req, res, next) => {
  try {
    const data = req.body;
    const created = await predmetData.createPredmet(data);
    res.send(created);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updatePredmet = async (req, res, next) => {
  try {
    const predmetId = req.params.id;
    const data = req.body;
    const updated = await predmetData.updatePredmet(predmetId, data);
    res.send(updated);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deletePredmet = async (req, res, next) => {
  try {
    const predmetId = req.params.id;
    const deletedPredmet = await predmetData.deletePredmet(predmetId);
    res.send(deletedPredmet);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getPredmeti,
  getPredmetById,
  createPredmet,
  updatePredmet,
  deletePredmet,
};
