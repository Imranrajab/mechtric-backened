const express = require("express");
const router = express.Router();
const metricController = require("../controller/formcontroller");

router
  .route("/")
  .get(metricController.getmetric)
  .post(metricController.postmetric);

module.exports = router;
