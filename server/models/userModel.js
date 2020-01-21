const { Pool } = require('pg');

const conString = 'postgres://rbfypvnj:pjNQCkJ6I-iyUNXgVu46BeIZpI1KFJvP@rajje.db.elephantsql.com:5432/rbfypvnj';

const pool = new Pool({
  connectionString: conString
});
// const client = new pg.Client(conString);


// client.connect(function(err) {
//   if (err) {
//     return console.err('could not connect to postgres', err);
//   }
  pool.query('SELECT NOW() AS "theTime"', function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    // console.log("result: ", result);
  });
//     console.log(result.rows[0].theTime);
//     client.end();
//   });
// });

// create a user
const createUser = (req, res, next) => {
  const { username, password } = req.body;
  const queryString = `INSERT INTO users(user_id, username, password) VALUES(default, '${username}', '${password}')`
  pool.query(queryString, function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    console.log(result.rows);
    pool.end();
    // Move to the next middleware using next();
  });
};

// get a User;
const getUser = (req, res, next) => {
  const { username, password } = req.body;
  const queryString = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
  pool.query(queryString, function(err, result) {
    if (err) {
      return console.error(`error running query, ${err}`);
    }
    console.log(result.rows);
    pool.end();
    // Use next() to move to next middleware
  });
};

// To test getUser method:
const username = 'rexosariemen';
const password = 'pass1234';
const queryString = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
pool.query(queryString, function (err, result) {
  if (err) {
    return console.error(`error running query, ${err}`);
  }
  console.log(result.rows);
  pool.end();
});
