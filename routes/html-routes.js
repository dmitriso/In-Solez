// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");
const isNotAuthenticated = require("../config/middleware/isNotAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // IF THE USER ALREADY HAS AN ACCOUNT SEND THEM TO THE MEMBERS PAGE
    // if (req.user) {
    //   res.redirect("/profile");
    // }
    res.render("welcome", { title: "InSolez||Welcome" });
  });
  app.get("/home", (req, res) => {
    // IF THE USER ALREADY HAS AN ACCOUNT SEND THEM TO THE MEMBERS PAGE
    // if (req.user) {
    //   res.redirect("/profile");
    // }
    res.render("home", {
      title: "InSolez||Homepage"
    });
  });
  app.get("/login", isNotAuthenticated, (req, res) => {
    // IF THE USER ALREADY HAS AN ACCOUNT SEND THEM TO THE MEMBERS PAGE
    if (req.user) {
      res.redirect("/profile");
    }
    res.render("login", { title: "InSolez||Login" });
  });

  app.get("/search", (req, res) => {
    // IF THE USER ALREADY HAS AN ACCOUNT SEND THEM TO THE MEMBERS PAGE
    res.render("search", {
      title: "InSolez||Search"
    });
  });

  app.get("/signup", isNotAuthenticated, (req, res) => {
    // IF THE USER ALREADY HAS AN ACCOUNT SEND THEM TO THE MEMBERS PAGE
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
