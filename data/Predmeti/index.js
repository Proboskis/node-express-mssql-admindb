"use strict";

const utils = require("../utils");
const config = require("../../config");
const sql = require("mssql");

const getPredmeti = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("predmeti");
    const list = await pool.request().query(sqlQueries.predmetilist);
    return list.recordset;
  } catch (error) {
    return error.message;
  }
};

const getPredmetById = async (predmetId) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("predmeti");
    const jedanPredmet = await pool
      .request()
      .input("predmetId", sql.Int, predmetId)
      .query(sqlQueries.predmetbyId);
    return jedanPredmet.recordset;
  } catch {
    return error.message;
  }
};

const createPredmet = async (predmetData) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("predmeti");
    const insertPredmet = await pool
      .request()
      .input("brojPredmeta", sql.NVarChar(30), predmetData.brojPredmeta)
      .input("arhivskiBroj", sql.NVarChar(30), predmetData.arhivskiBroj)
      .input("nazivPredmeta", sql.NVarChar(120), predmetData.nazivPredmeta)
      .input("opisPredmeta", sql.NVarChar(200), predmetData.opisPredmeta)
      .input("fazaPredmeta", sql.NVarChar(50), predmetData.fazaPredmeta)
      .input("iznos", sql.Int, predmetData.iznos)
      .input("datumUnosa", sql.Date, predmetData.datumOtpisa)
      .input("datumOtpisa", sql.Date, predmetData.datumOtpisa)
      .input("ustanovaId", sql.Int, predmetData.ustanovaId)
      .input("potpisanoId", sql.Int, predmetData.potpisanoId)
      .input("preuzimaId", sql.Int, predmetData.preuzimaId)
      .input("napomena", sql.NVarChar(30), predmetData.napomena)
      .input("adminRadnikId", sql.Int, predmetData.adminRadnikId)
      .query(sqlQueries.createPredmet);
    return insertPredmet.recordset;
  } catch (error) {
    return error.message;
  }
};

const updatePredmet = async (predmetId, predmetData) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("predmeti");
    const updatePredmet = await pool
      .request()
      .input("predmetId", sql.Int, predmetId)
      .input("brojPredmeta", sql.NVarChar(30), predmetData.brojPredmeta)
      .input("arhivskiBroj", sql.NVarChar(30), predmetData.arhivskiBroj)
      .input("nazivPredmeta", sql.NVarChar(120), predmetData.nazivPredmeta)
      .input("opisPredmeta", sql.NVarChar(200), predmetData.opisPredmeta)
      .input("fazaPredmeta", sql.NVarChar(50), predmetData.fazaPredmeta)
      .input("iznos", sql.Int, predmetData.iznos)
      .input("datumUnosa", sql.Date, predmetData.datumUnosa)
      .input("datumotpisa", sql.Date, predmetData.datumOtpisa)
      .input("ustanovaId", sql.Int, predmetData.ustanovaId)
      .input("potpisanoId", sql.Int, predmetData.potpisanoId)
      .input("preuzimaId", sql.Int, predmetData.preuzimaId)
      .input("napomena", sql.NVarChar(30), predmetData.napomena)
      .input("adminRadnikId", sql.Int, predmetData.adminRadnikId)
      .query(sqlQueries.updatePredmet);
    return updatePredmet.recordset;
  } catch (error) {
    return error.message;
  }
};

const deletePredmet = async (predmetId, predmetData) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("predmeti");
    const deletedPredmet = await pool
      .request()
      .input("predmetId", sql.Int, predmetId)
      .query(sqlQueries.deletePredmet);
    return deletedPredmet.recordset;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getPredmeti,
  getPredmetById,
  createPredmet,
  updatePredmet,
  deletePredmet,
};
