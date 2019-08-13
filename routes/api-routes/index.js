const express = require("express");
const router = express.Router();

const db = require("./../../models");

const passport = require("./../../config/passport")

router.post("/users/signup", (req, res) => {
  console.log("user signup")
    db.User
      .create({
        username: req.body.username,
        password: req.body.password
      })

    .then(createdUserInfo => {
      console.log("user added to DB")
      // console.log(createdUserInfo)
    })
});

router.post("/users/login", passport.authenticate("local"), (req, res) => {
  console.log(req.session)
  const userInfo = {
    username: req.user.username
  }
  res.send(userInfo)
});

router.post('/user/logout', (req, res) => {
  if (req.user) {
      req.logout()
      res.send({ msg: 'logging out' })
  } else {
      res.send({ msg: 'no user to log out' })
  }
});

router.get('/user', (req, res, next) => {
  console.log('===== user!!======')
  console.log(req.user)
  if (req.user) {
      res.json({ user: req.user })
  } else {
      res.json({ user: null })
  }
});


module.exports = router;