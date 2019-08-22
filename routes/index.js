const apiRoutesUser = require("./api-routes-user/");
const apiRoutesForms = require("./api-routes-forms")

const path = require("path");
const express = require("express");
const router = express.Router();

router.use("/api/users", apiRoutesUser)

router.use("/api/forms", apiRoutesForms)

router.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
})

module.exports = router;