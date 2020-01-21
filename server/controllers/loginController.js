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
      console.log("In verifyUser_rows", result.rows);

      if (error) return console.error(`error with query`, error);
      if (!result.rows.length)
        return res.send("Username not found or Password incorrect");
      bcrypt.compare(pass, result.rows[0].password, (_, res) => {
        if (res) next();
        else return res.send("Username not found or Password incorrect");
      });
    }
  );
};

// Controller for handling creating a user
loginController.createUser = async (req, res, next) => {
  const { user, pass } = req.body;
  // First check DB to see if username has been used before
  // Optimize rows: data
  console.log(req.body);
  const { rows: data } = await pg.query(
    `SELECT username FROM users WHERE username = '${user}'`
  );
  if (data.length) return res.send("Username Already Exists");

  bcrypt.hash(pass, saltRounds, async (err, hash) => {
    if (err) return console.log(err);
    // Store hash to SQL db
    await pg.query(
      `INSERT INTO users(user_id, username, password) VALUES(default, '${user}', '${hash}')`
    );
    // console.log("after insert");
    next();
  });
  // console.log("after bcrypt");
};

module.exports = loginController;
