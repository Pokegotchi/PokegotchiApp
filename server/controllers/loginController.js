const pool = require("../models/userModel.js");
const bcrypt = require("bcrypt");
const saltRounds = 10;
// Handles logging in and grabbing the data from our database. If no account is found, add user to DB and send them to a pokemon grabbing controller

// Build initial controller object
const loginController = {};

// Controller for handling sign in
loginController.verifyUser = (req, res, next) => {
  // check data against SQL DB, then give cookie and send to landing page
};

// Controller for handling creating a user
loginController.createUser = async (req, res, next) => {
  const { user, pass } = req.body;
  // First check DB to see if username has been used before
  // Optimize rows: data
  const { rows: data } = await pool.query(
    `SELECT username FROM users WHERE username = '${user}'`
  );
  if (data.length) return res.render("Username Already Exists");

  bcrypt.hash(pass, saltRounds, (err, hash) => {
    if (err) return console.log(err);
    // Store hash to SQL db
    pool.query(
      `INSERT INTO users(user_id, username, password) VALUES(default, '${user}', '${hash}')`,
      error => {
        if (error) return console.error("error running query", error);
        pool.end();
      }
    );
  });
  next();
};

// async function testDrive(user, pass) {
//   let userExists = true;
//   const { rows: data } = await pool.query(
//     `SELECT username FROM users WHERE username = '${user}'`
//   );
//   console.log(data);
//   return;
// }

// testDrive("rexosariemen", "1232343sfa");
