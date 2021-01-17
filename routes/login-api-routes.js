// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {
  // THIS AUTHENTICATES THE USERS LOGIN NAME AND PASSWORD
  app.post(
    "/api/login",
    passport.authenticate("local", {
      successRedirect: "/members",
      failureRedirect: "/login"
    }),
    (req, res) => {
      res.json({
        userName: req.user.userName,
        id: req.user.id
      });
    }
  );
  // THIS ROUTE CREATES A NEW USER ROW
  app.post("/api/signup", (req, res) => {
    const user = req.body;
    db.User.create({
      firstName: user.firstName,
      lastName: user.lastName,
      userName: user.userName,
      password: user.password,
      email: user.email
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });
  // ROUTE FOR LOGGING USER OUT
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
  // ROUTE FOR GETTING SOME DATA ABOUT OUR USER TO BE USED CLIENT SIDE
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      res.json({});
    } else {
      res.json({
        userName: req.user.userName,
        id: req.user.id
      });
    }
  });
};
