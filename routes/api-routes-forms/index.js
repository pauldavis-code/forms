const express = require("express");
const router = express.Router();

const db = require("../../models");

router.get("/findall", (req, res) => {
  db.User.findOne({id: req.body.id})
})

module.exports = router;