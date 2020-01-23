// For choosing a pokemon. Will this be for both starting and non? Yes. the fetch happens based on what has been passed in.

//on front end, feed state obj increments; redux saga will take in feed state, and when it hits

const express = require("express");
const pokeAPIController = require("../controllers/pokeAPIController.js");

const router = express.Router();

router.get("/", (req, res) => {
  /*Serve random pokemon page*/
  res.status(200).send();
});

router.get("/select", pokeAPIController.addNewPoke, (req, res) => {
  /*Serve pokemon list page*/
  res.redirect("/landing");
});

module.exports = router;
