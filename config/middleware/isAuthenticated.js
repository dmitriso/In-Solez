// This is middleware for restricting routes a user is not allowed to visit if not logged in
module.exports = class Auth {
  // If the user is logged in, continue with the request to the restricted route
  checkAuthentication = (req, res, next) => {
    if (req.isAuthenticated()) {
      //req.isAuthenticated() will return true if user is logged in
     return next();
    } else {
      res.redirect("/login");
    }
  };

  notAuthentication = (req, res, next) => {
    if (req.isAuthenticated()) {
      //req.isAuthenticated() will return true if user is logged in
      res.redirect("/profile");
    } else {
     return next();
    }
  };

  // If the user isn't logged in, redirect them to the login page

};