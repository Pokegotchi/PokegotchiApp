// Our main page after login/signup
const express = require("express");
const cookieController = require("../controllers/cookieController.js");
const pokeAPIController = require("../controllers/pokeAPIController.js");

const router = express.Router();

router.get(
  "/",
  cookieController.checkCookie,
  pokeAPIController.fetchUserData,
  (req, res) => {
    // Serve landing page file
    console.log(" redirected to landing");
    res.send("rejoining landing page; cookie checked");
  }
);

router.get("/verif", pokeAPIController.fetchUserData, (req, res) => {
  console.log("actually redirected to landing/verif");
  res.send(res.locals.data);
});

router.post("/feed", pokeAPIController.feedPoke);

router.post("/evolve", pokeAPIController.evolvePoke);

module.exports = router;
