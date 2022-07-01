const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HotelSchema = new Schema({
	name: { type: String, required: true },
	type: { type: String, required: true },
	city: { type: String, required: true },
	address: { type: String, required: true },
	distance: { type: String, required: true },
	photos: { type: String },
	title: { type: String, required: true },
	desc: { type: String, required: true },
	rating: { type: Number, min: 0, max: 5 },
	rooms: { type: [String] }, //contains room ids of all the rooms in a particular hotel so we use and array of strings to stores that, room ids are in the room schema
	lowestPrice: { type: Number, required: true },
	featured: { type: Boolean, default: false },
});

const Hotel = mongoose.model("Hotel", HotelSchema);

module.exports = Hotel;
