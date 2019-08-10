const express = require("express");
const router = express.Router();

const db = require("./../../models");

const bcrypt = require("bcrypt");

router.post("/users/signup", async (req, res) => {
  console.log("user signup")
  const hashedPassword = await bcrypt.hash(req.body.password, 10)
    db.User
      .create({
        username: req.body.username,
        password: hashedPassword
      })

    .then(createdUserInfo => {
      console.log("user added to DB")
      console.log(createdUserInfo)
    })
  }
)


module.exports = router;