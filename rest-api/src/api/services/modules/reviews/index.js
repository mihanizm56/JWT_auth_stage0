const mongoose = require("mongoose");
const { reviews: reviewsData } = require("../../../models/reviews");

module.exports.getAllReviews = () => {
	const Review = mongoose.model("Review");
	return Review.find();
};

module.exports.addToReviews = newReview => {
	const Review = mongoose.model("Review");
	const addedReview = new Review({ ...newReview });
	return addedReview;
};

module.exports.deleteTheReview = review => {
	const Reviews = mongoose.model("Review");
	return Reviews.deleteOne({ ...review });
};
