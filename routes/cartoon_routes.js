const express = require('express');
const router = express.Router();
const cartoon_controller = require("../controllers/cartoon_controller");
router.post("/characters",cartoon_controller.cartoon_post)
module.exports = router;