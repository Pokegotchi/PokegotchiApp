const cookieParser = require("cookie-parser");
const cookieController = {};

cookieController.createCookie = (req, res, next) => {
  // Create cookie based on user ID saved in res.locals
  console.log("entered checkCookie controller");
  console.log("req.cookies", req.cookies);
  if (!req.cookies.userId) res.cookie("userId", res.locals.userId);
  next();
};

cookieController.checkCookie = (req, res, next) => {
  // check if the user attempting to join page has cookie.
  // If they do have a cookie, send them to the landing page
  if (!req.cookies.userId) res.redirect("/login");
  else next();
};

module.exports = cookieController;
