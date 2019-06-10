const mongoose = require("mongoose");

// find all reviews from db
module.exports.getAllReviews = () => {
	const Review = mongoose.model("Review");
	return Review.find();
};

// add the review to db
module.exports.addToReviews = newReview => {
	const Review = mongoose.model("Review");
	const addedReview = new Review({ ...newReview });
	return addedReview;
};

// delete the review from db
module.exports.deleteTheReview = review => {
	const Reviews = mongoose.model("Review");
	return Reviews.deleteOne({ ...review });
};
