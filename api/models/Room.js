const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
	title: { type: String, required: true },
	price: { type: Number, required: true },
	maxPeople: { type: Number, required: true },
	desc: { type: String, required: true },
	roomNumbers: [
		{
			number: Number,
			unavailableDates:
				// has all the dates in array for which the room is not booked
				{ type: [Date] },
		},
	], //contains room numbers of all the rooms that fulfill the above conditions
});

const Room = mongoose.model("Room", RoomSchema);

module.exports = Room;
