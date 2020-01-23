const cookieParser = require("cookie-parser");
const cookieController = {};

cookieController.createCookie = (req, res, next) => {
  // Create cookie based on user ID saved in res.locals
  console.log("entered createCookie controller");
  const foundUser = req.cookies ? req.cookies : {};
  console.log("foundUser : ", foundUser)
  if (!foundUser.userId)
    res.cookie("userId", res.locals.userId.toString(), {
      expires: new Date(Date.now() + 9000000)
    });
    console.log("res.locals : ", res.locals)
    console.log("res.cookie : ", res.cookie)
  next();
};

cookieController.checkCookie = (req, res, next) => {
  // check if the user attempting to join page has cookie.
  // If they do have a cookie, send them to the landing page
  console.log(`checking cookies`);
  const foundUser = req.cookies ? req.cookies : {};
  if (!foundUser.userId) res.redirect("/login");
  else next();
};

module.exports = cookieController;
