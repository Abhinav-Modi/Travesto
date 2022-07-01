const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
const authRoute = require("./routes/auth.js");
const hotelsRoute = require("./routes/hotels.js");
const roomsRoute = require("./routes/rooms.js");
const usersRoute = require("./routes/users.js");

dotenv.config();

mongoose
	.connect(process.env.MONGO)
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((error) => {
		throw error;
	});
//middleware

app.use(express.json());
app.use("/auth", authRoute);
app.use("/hotels", hotelsRoute);
app.use("/rooms", roomsRoute);
app.use("/users", usersRoute);
app.listen(8000, (req, res) => {
	console.log("Server is running on port 8000");
});
