const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const cookieRouter = require("./routes/cookieRouter.js");
const loginRouter = require("./routes/loginRouter.js");
const signupRouter = require("./routes/signupRouter.js");
const landingRouter = require("./routes/landingRouter.js");

const app = express();

const port = 4000;

app.use(express.json());

// app.use(express.static("build"));

app.use("/", cookieRouter);

app.use("/login", loginRouter);

app.use("/signup", signupRouter);

app.use("/landing", landingRouter);

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
