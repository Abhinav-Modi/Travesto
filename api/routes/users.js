const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");
const verifyToken = require("../utils/verifyToken.js");
// const { route } = require("./auth.js");

router.get("/checkauth", verifyToken.tokenVerify, (req, res, next) => {
	res.send("User is logged in");
});
router.get("/checkuser/:id", verifyToken.userVerify, (req, res, next) => {
	res.send("User is logged in and can delete the account");
});
router.get("/checkadmin/:id", verifyToken.adminVerify, (req, res, next) => {
	res.send("Admin is logged in and can delete all the account");
});
// Create
router.post("/", userController.createUser);
// Update
router.put("/:id", verifyToken.userVerify, userController.updateUser);
// Delete
router.delete("/:id", verifyToken.userVerify, userController.deleteUser);
// Get
router.get("/:id", verifyToken.userVerify, userController.getUser);
router.get("/", verifyToken.adminVerify, userController.getAllUser);

module.exports = router;
