const mongoose = require("mongoose");

const reviewsSchema = new mongoose.Schema({
	review: {
		type: String,
		required: true,
		unique: true,
	},
	user: {
		type: String,
		required: true,
		unique: false,
	},
	login: {
		type: String,
		required: true,
		unique: false,
	},
});

mongoose.model("Review", reviewsSchema, "Reviews");
