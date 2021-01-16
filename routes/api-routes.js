// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {
  // THIS AUTHENTICATES THE USERS LOGIN NAME AND PASSWORD.
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    res.json({
      userName: req.user.userName,
      id: req.user.id
    });
  });







};
