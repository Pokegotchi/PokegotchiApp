const express = require("express");
const loginController = require("../controllers/loginController.js");
const cookieController = require("../controllers/cookieController.js");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  /*Serve login page*/
  res.sendFile(path.join(__dirname, "../../build/index.html"));
});

router.post(
  "/sign_in",
  loginController.verifyUser,
  cookieController.createCookie,
  (req, res) => {
    console.log("redirecting to landing/verif");
    res.redirect("/landing/verif");
  }
);

router.get("/sign_up", (req, res) => res.redirect("/signup"));

module.exports = router;
