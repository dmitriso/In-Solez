// Requiring our custom middleware for checking if a user is logged in
const Auth = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    // if (req.user) {
    //  
     res.redirect("/profile");
    // }
    res.render("home", { title: "InSolez||Homepages" });
  });

  app.get("/login", Auth.notAuth, (req, res) => {
    // If the user already has an account send them to the members page
    // if (req.user) {
    //   res.redirect("/profile");
    // }
    res.render("login", { title: "InSolez||Login" });
  });

  app.get("/search", Auth.checkAuth, (req, res) => {
    // If the user already has an account send them to the members page
    res.render("search", { title: "InSolez||Search" });
  });

  // this path is in twice didn't want to delete but wanted to make sure it wasn't here for a reason
  // app.get("/profile", (req, res) => {
  //   // If the user already has an account send them to the members page
  //   res.render("profile", { title: "InSolez||Profile" });
  // });

  app.get("/signup", (req, res) => {
    // If the user already has an account send them to the members page
    // if (req.user) {
    //   res.redirect("/profile");
    // }
    res.render("signup", Auth.notAuth, {
      title: "InSolez||Signup"
    });
  });
  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/profile", Auth.checkAuth, (req, res) => {
    res.render("profile", { title: "InSolez||Profile" });
  });
};
