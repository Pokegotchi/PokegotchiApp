const cookieController = {};

cookieController.createCookie = (req, res, next) => {
  // Create cookie based on user ID saved in res.locals
  console.log("entered createCookie controller");
  if (!req.cookies.userId)
    res.cookie("userId", res.locals.userId.toString(), {
      expires: new Date(Date.now() + 9000000)
    });
  console.log("added cookie");
  // console.log("res.locals : ", res.locals)
  // console.log("res.cookie : ", res.cookie)
  // req.userId = res.locals.userId;
  console.log("in create cookie", res.locals.userId);
  next();
};

cookieController.checkCookie = (req, res, next) => {
  // check if the user attempting to join page has cookie.
  // If they do have a cookie, send them to the landing page
  console.log("entered checkCookie controller");
  if (!req.cookies.userId) res.redirect("/login");
  else next();
};

module.exports = cookieController;
