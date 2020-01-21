const pg = require("../models/userModel.js");
const bcrypt = require("bcrypt");
const saltRounds = 10;
// Handles logging in and grabbing the data from our database. If no account is found, add user to DB and send them to a pokemon grabbing controller

// Build initial controller object
const loginController = {};

// Controller for handling sign in
loginController.verifyUser = (req, res, next) => {
  // check data against SQL DB, then give cookie and send to landing page
  const { user, pass } = req.body;

  pg.query(
    `SELECT password FROM users WHERE username = '${user}'`,
    (error, result) => {
      if (error) return console.error(`error with query`, error);
      if (!result.rows.length)
        return res.render("Username not found or Password incorrect");
      bcrypt.compare(pass, result.rows[0], (_, res) => {
        if (res) next();
        else return res.render("Username not found or Password incorrect");
      });
    }
  );
};

// Controller for handling creating a user
loginController.createUser = async (req, res, next) => {
  const { user, pass } = req.body;
  // First check DB to see if username has been used before
  // Optimize rows: data
  const { rows: data } = await pg.query(
    `SELECT username FROM users WHERE username = '${user}'`
  );
  if (data.length) return res.render("Username Already Exists");

  await bcrypt.hash(pass, saltRounds, (err, hash) => {
    if (err) return console.log(err);
    // Store hash to SQL db
    pg.query(
      `INSERT INTO users(user_id, username, password) VALUES(default, '${user}', '${hash}')`
    );
  });
  next();
};
