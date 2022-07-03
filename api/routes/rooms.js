const express = require("express");

const router = express.Router();
const roomController = require("../controllers/roomController");
const verifyToken = require("../utils/verifyToken");

// Create
router.post("/:hotelid", verifyToken.adminVerify, roomController.createRoom);
// Update
router.put("/:id", verifyToken.adminVerify, roomController.updatedRoom);
// Delete
router.delete(
	"/:id/:hotelid",
	verifyToken.adminVerify,
	roomController.deleteRoom
);
// Get
router.get("/:id", roomController.getRoom);
router.get("/", roomController.getAllRoom);
module.exports = router;
