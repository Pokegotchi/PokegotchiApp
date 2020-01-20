const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const app = express();

const port = 4000;

app.use(bodyParser.json());
// app.use(cookieParser());

// app.use(express.static("build"));

app.get("/", (req, res) => res.send("Pokegotchi!!!"));

app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

// Global error handling:
app.use(function(err, req, res, next) {
  const defaultError = {
    log: "Express error handler caught unknown middleware error",
    status: 400,
    message: { err: "An error occurred" }
  };
  const newErrObj = Object.assign(defaultError, err);
  console.log(newErrObj);
  res.status(newErrObj.status).json(newErrObj.message);
});
app.listen(port, () => console.log(`  server running on port: ${port} `));
