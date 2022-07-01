const express = require("express");

const router = express.Router();
const hotelController = require("../controllers/hotelController");
// Create
router.post("/", hotelController.createHotel);
// Update
router.put("/:id", hotelController.updatedHotel);
// Delete
router.delete("/:id", hotelController.deleteHotel);
// Get
router.get("/:id", hotelController.getHotel);
router.get("/", hotelController.getAllHotel);

module.exports = router;
