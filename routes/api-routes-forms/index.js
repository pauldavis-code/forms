const express = require("express");
const router = express.Router();

const db = require("../../models");

router.post("/add", (req, res) => {
  db.Forms.create({form_owner: req.body.id, form_title: "test"})
    .then(res => {
      console.log(res)
    })
})

router.post("/find", (req, res) => {
  if (req.body.id) {
    db.Forms.find({$or: [{form_owner: req.body.id}, {form_borrower: req.body.id}]})
      .then(foundForms => {
        let usersFoundForms = {
          owned: [],
          borrowed: []
        }
        foundForms.forEach((form) => {
          if (form.form_owner === req.body.id) {
            usersFoundForms.owned.push(form)
          } else {
            usersFoundForms.borrowed.push(form)
          }
        })
        res.json(usersFoundForms)
        // console.log("owned forms: " + usersFoundForms.owned)
        // console.log("borrowed forms: " + usersFoundForms.borrowed)

      })
  }
  
})

module.exports = router;