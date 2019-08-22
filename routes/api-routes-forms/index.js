const express = require("express");
const router = express.Router();

const db = require("../../models");

router.post("/add", (req, res) => {
  db.FormTemplate.create({form_owner: req.body.id, form_title: "test"})
    .then(res => {
      console.log(res)
    })
})

router.post("/findall", (req, res) => {
  console.log("Find forms: " + req.body.id)
  if (req.body.id) {
    db.FormTemplate.find({form_owner: req.body.id})
      .then(foundTemplateForms => {
        db.FormCompleted.find({form_owner: req.body.id})
          .then(foundCompletedForms => {
            let usersFoundForms = {
              templates: [],
              completed: []
            }
            foundTemplateForms.forEach((form) => {
              usersFoundForms.templates.push(form)
            })
            foundCompletedForms.forEach((form) => {
              usersFoundForms.completed.push(form)
            })
            res.json(usersFoundForms)
          })
      })
    }
})

router.post("/findone", (req, res) => {
  db.FormTemplate.findById(req.body.id)
    .then(formData => {
      // console.log(formData)
      res.send(formData)
    })
})

router.post("/readone", (req, res) => {
  db.FormCompleted.findById(req.body.id)
    .then(formData => {
      res.send(formData)
    })
})

router.post("/createnew", (req, res) => {
  db.FormTemplate.create(req.body)
  console.log(req.body)
})

router.post("/complete", (req, res) => {
  db.FormCompleted.create(req.body)
})
  

module.exports = router;