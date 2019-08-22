const express = require("express");
const router = express.Router();

const db = require("../../models");

const passport = require("../../config/passport")

router.post("/signup", (req, res) => {
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

router.post("/login", passport.authenticate("local"), (req, res) => {
  // console.log(req.session)
  const userInfo = {
    username: req.user.username,
    id: req.user._id
  }
  console.log(req.session)
  console.log("user info: " + userInfo.id)
  res.send(userInfo)
});

router.post('/logout', (req, res) => {
  if (req.user) {
      req.logout()
      res.send({ msg: 'logging out' })
  } else {
      res.send({ msg: 'no user to log out' })
  }
});

router.get('/find', (req, res, next) => {
  // console.log('===== user!!======')
  console.log("req.user: " + req.user._id)
  if (req.user !== undefined) {
    console.log("authenticated")
    res.status(200)
    res.json({user: req.user})
    console.log("res sent")
  } else {
    res.status(401).send()
    console.log("not authenticated")
  }
});

router.post("/forms", (req, res) => {
  if (req.body.id) {
    db.User.findById(req.body.id)
      .then(user => {
        let userForms = {
          owned: user.owned_forms,
          borrowed: user.borrowed_forms
        }
        res.json(userForms)
      })
      .catch(err => {
        console.log("ERROR: " + err)
      })
  }
})


module.exports = router;