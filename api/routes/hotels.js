const express = require("express");
const verifyToken = require("../utils/verifyToken.js");
const router = express.Router();
const hotelController = require("../controllers/hotelController");
// Create
router.post("/", verifyToken.adminVerify, hotelController.createHotel);
// Update
router.put("/:id", verifyToken.adminVerify, hotelController.updatedHotel);
// Delete
router.delete("/:id", verifyToken.adminVerify, hotelController.deleteHotel);
// Get
router.get("/:id", hotelController.getHotel);
router.get("/", hotelController.getAllHotel);

module.exports = router;
