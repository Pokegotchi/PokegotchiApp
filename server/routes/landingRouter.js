// Our main page after login/signup
const express = require("express");
const loginController = require("../controllers/loginController.js");
const router = express.Router();

router.get("/", loginController.checkCookie, (req, res) => {});
