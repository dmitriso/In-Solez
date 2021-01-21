if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");
const flash = require("express-flash");
const exphbs = require("express-handlebars");
const path = require("path");

// Requiring passport as we've configured it
const passport = require("./config/passport");
// const mysql = require("mysql");
// const MySQLStore = require("express-mysql-session")(session);

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));
app.use(flash());

// We need to use sessions to keep track of our user's login status
// const options = {
//   username: "root",
//   password: "root",
//   database: "inSolez_db",
//   host: "127.0.0.1",
//   dialect: "mysql",
//   user: "dbUser",
//   schema: {
//     tableName: "sessions",
//     columnNames: {
//       sessionId: "session_id",
//       expires: "expires",
//       data: "data"
//     }
//   }
// };
// const connection = mysql.createConnection(options)
// const sessionStore = new MySQLStore(options, connection);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    // store: sessionStore,
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());

// sessionStore.close();

app.engine("handlebars", exphbs({defaultLayout: "main",}));
app.set("view engine", "handlebars");

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/login-api-routes.js")(app);
require("./routes/sneaker-api-routes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
