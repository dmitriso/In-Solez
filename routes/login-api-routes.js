// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
// const router = express.Router();

module.exports = function(app) {
  // THIS AUTHENTICATES THE USERS LOGIN NAME AND PASSWORD
  app.post(
    "/api/login",
    passport.authenticate("local", {
      successRedirect: "/profile",
      failureRedirect: "/login",
      failureFlash: true
      // need to add in somewhere an if statement that looks like this || if (messages.error){messages.error} || messages is built into flash.
    }),
    (req, res) => {
      res.json({
        userName: req.user.userName,
        id: req.user.id
      });
    }
  );

  // THIS ROUTE CREATES A NEW USER ROW
  app.post("/api/signup", async (req, res) => {
    console.log("backend");
    try {
      const user = req.body;
      await db.User.create({
        firstName: user.firstName,
        lastName: user.lastName,
        userName: user.userName,
        password: user.password,
        email: user.email
      });
      console.log(user);
      res.status(307).end();
    } catch (err) {
      res.status(401).redirect("/signup");
    }
  });

  // ROUTE FOR LOGGING USER OUT
  app.get("/logout", (req, res) => {
    req.logout();
    req.session.destroy(() => {
      res.clearCookie("connect.sid");
      res.redirect("/");
    });
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

  // checks to see if the user is logged
  // checkAuthenticated = ((req, res, next) => {
  //   if (req.isAuthenticated()) {
  //     next();
  //   }
  //   res.redirect("/login")
  // });
  // router.get("/logout",(req,res) => {
  //   req.logout();
  //   req.session.destroy(() => {
  //     res.clearCookie("connect.sid");
  //     res.redirect("/");
  //   });
  // })
};
