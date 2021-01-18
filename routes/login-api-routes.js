// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
const bcrypt = require("bcryptjs");
// const router = express.Router();

module.exports = function (app) {
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
      try {
        const user = req.body;
        const hashedPassword = await bcrypt.hash(user.password, 10);
        db.User.create({
          firstName: user.firstName,
          lastName: user.lastName,
          userName: user.userName,
          password: hashedPassword,
          email: user.email
        });
        console.log(data.toString())
        res.status(307).end();
      } catch {
        res.json(err);
        res.status(401).redirect("/signup")
      }
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

  // router.get("/logout",(req,res) => {
  //   req.logout();
  //   req.session.destroy(() => {
  //     res.clearCookie("connect.sid");
  //     res.redirect("/");
  //   });
  // })
};