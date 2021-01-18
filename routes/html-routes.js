// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");
const isNotAuthenticated = require("../config/middleware/isNotAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    // if (req.user) {
    //   res.redirect("/profile");
    // }
    res.render("home", { title: "InSolez||Homepages" });
  });

  app.get("/login", isNotAuthenticated, (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/profile");
    }
    res.render("login", { title: "InSolez||Login" });
  });

  app.get("/search", (req, res) => {
    // If the user already has an account send them to the members page
    res.render("search", {
      title: "InSolez||Search"
    });
  });

  app.get("/signup", isNotAuthenticated, (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/profile");
    }
    res.render("signup", {
      title: "InSolez||Signup"
    });
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/profile", isAuthenticated, (req, res) => {
    res.render("profile", { title: "InSolez||Profile" });
  });
};
