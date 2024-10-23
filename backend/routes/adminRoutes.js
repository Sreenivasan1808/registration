const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
router.post("/login", adminController.verifyAdminLogin);

module.exports = router;