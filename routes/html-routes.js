// REQUIRING PATH TO SO WE CAN USE RELATIVE ROUTES TO OUR HTML FILES
const path = require("path");

// REQUIRING OUR CUSTOM MIDDLEWARE FOR CHECKING IF A USER IS LOGGED IN 
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  // THIS SENDS THE USER THE HOME PAGE HTML AS DEFAULT
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render(path.join(__dirname, "../public/views/html/home.html"));
  });

// THIS ROUTES THE USER TO THE HOMEPAGE HTML IF HOME HAS BEEN REQUESTED
  app.get("/home", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/views/html/home.html"));
  });

  // THIS ROUTES THE USER TO THE LOGIN PAGE IF LOGIN HAS BEEN REQUESTED
  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/views/html/login.html"));
  });

// THIS ROUTES THE USER TO THE SIGNUP PAGE IF A SIGNUP REQUEST HAS BEEN MADE
  app.get("/signup", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/views/html/signup.html"));
  })

  app.get("/search", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/views/html/search.html"));
  })

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/views/html/members-profile.html"));
  });

 
};
