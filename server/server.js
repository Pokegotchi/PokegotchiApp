const express = require("express");
const path = require("path");

const app = express();

function catchError(err) {
  const defaultError = {
    log: "Express error handler caught unknown middleware error",
    status: 400,
    message: { err: "An error occurred" }
  };
  return Object.assign(defaultError, err);
}

app.use((err, req, res) => {
  const errorObject = catchError(err);
  res.status(errorObject.status).send(errorObject.message);
});

app.listen(3000, () => console.log(`listening on port 3000`));
