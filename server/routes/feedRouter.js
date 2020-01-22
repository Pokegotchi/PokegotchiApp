// Handles feeding clicks
// For choosing a pokemon. Will this be for both starting and non? Yes. the fetch happens based on what has been passed in.

const express = require("express");
const pokeAPIController = require("../controllers/pokeAPIController.js");

const router = express.Router();

router.get("/", pokeAPIController.spawnPoke, (req, res) => {
  /*Serve random pokemon page*/
  res.send("served 'list' of pokemon");
});

router.get("/select", pokeAPIController.updateDB, (req, res) => {
  /*Serve pokemon list page*/
  res.redirect("/landing");
});
