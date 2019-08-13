const apiRoutes = require("./api-routes/")

const path = require("path");
const express = require("express");
const router = express.Router();

router.use("/api", apiRoutes)

router.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
})

module.exports = router;