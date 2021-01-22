// REQUIRING OUR CUSTOM MIDDLEWARE FOR CHEKCING IF A USER IS LOGGED IN
const isAuthenticated = require("../config/middleware/isAuthenticated");
const isNotAuthenticated = require("../config/middleware/isNotAuthenticated");

module.exports = function(app) {
  //THIS ROUTES THE USER TO THE WELCOME
  app.get("/", isNotAuthenticated, (req, res) => {
    // IF THE USER ALREADY HAS AN ACCOUNT SEND THEM TO THE MEMBERS PAGE
    if (req.user) {
      res.redirect("/profile");
    }
    res.render("welcome", {
      title: "InSolez||Welcome"
    });
  });

  app.get("/home", isAuthenticated, (req, res) => {
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
    res.render("login", {
      title: "InSolez||Login"
    });
  });

  app.get("/search", isAuthenticated, (req, res) => {
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

  // HERE WE'VE ADDED OUR isAuthenticated MIDDLEWARE TO THIS ROUTE.
  // IF A USER WHO IS NOT LOGGED IN TRIES TO ACCESS THIS ROUTE THEY WILL BE REDIRECTED TO THE SIGNUP PAGE.
  app.get("/profile", isAuthenticated, (req, res) => {
    res.render("profile", {
      title: "InSolez||Profile"
    });
  });
};