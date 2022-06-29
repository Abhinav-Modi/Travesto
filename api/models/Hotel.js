import mongoose from "mongoose";
const { Schema } = mongoose;

const HotelSchema = new mongoose.Schema({
	name: { type: String, required: true },
	type: { type: String, required: true },
	city: { type: String, required: true },
	address: { type: String, required: true },
	distance: { type: String, required: true },
	photos: { type: String, required: true },
	desc: { type: String, required: true },
	rating: { type: Number, min: 0, max: 5, required: true },
	rooms: { type: [String] }, //contains room ids of all the rooms in a particular hotel so we use and array of strings to stores that, room ids are in the room schema
	lowestPrice: { type: Number, required: true },
	featured: { type: Boolean, default: false },
});

module.exports = db.model("Hotel", HotelSchema);
