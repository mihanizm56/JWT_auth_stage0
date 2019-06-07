const mongoose = require("mongoose");

const reviewsSchema = new mongoose.Schema({
	review: {
		type: String,
		required: true,
		unique: false,
	},
	user: {
		type: String,
		required: true,
		unique: true,
	},
	login: {
		type: String,
		required: true,
		unique: true,
	},
});

mongoose.model("Review", reviewsSchema, "Reviews");
