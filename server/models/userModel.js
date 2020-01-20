const pg = require('pg');

const conString = 'postgres://rbfypvnj:pjNQCkJ6I-iyUNXgVu46BeIZpI1KFJvP@rajje.db.elephantsql.com:5432/rbfypvnj';

const client = new pg.Client(conString);
client.connect(function(err) {
  if (err) {
    return console.err('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].theTime);
    client.end();
  });
});