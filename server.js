const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// DB Connection
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/forms");

// Passport and Session
const passport = require("passport")
const session = require("express-session");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session")
app.use(cookieSession({
  secret: 'secret-key-you-dont-tell-the-client',
  signed: true,
}));
app.use(
  session({
    secret: "terrible-string",
    resave: false,
    saveUninitialized: false,
    cookie: {secure: false}
  })
);
app.use(passport.initialize())
app.use(passport.session())

// Define API routes here
const routes = require("./routes")
app.use(routes);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
