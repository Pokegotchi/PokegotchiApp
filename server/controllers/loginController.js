const bcrypt = require("bcrypt");
const saltRounds = 10;
// Handles logging in and grabbing the data from our database. If no account is found, add user to DB and send them to a pokemon grabbing controller

// Build initial controller object
const loginController = {};

// Controller for handling sign in
loginController.login = (req, res, next) => {
  // check data against SQL DB, then give cookie and send to landing page
};

// Controller for handling creating a user
loginController.createUser = (req, res, next) => {
  const { user, pass } = req.body;
  bcrypt.hash(pass, saltRounds, (err, hash) => {
    // Store hash to SQL db
  });
  next();
};
