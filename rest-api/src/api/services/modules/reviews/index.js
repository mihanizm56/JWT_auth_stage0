const mongoose = require("mongoose");
const { reviews: reviewsData } = require("../../../models/reviews");
// const { Review } = require("../../../models/reviews");

// module.exports.getAllReviews = () => {
// 	const reviewsArray = reviewsData;

// 	return reviewsArray;
// };

module.exports.getAllReviews = reviewData => {
	const Review = mongoose.model("Review");
	return (addedToken = new Review({ ...reviewData }));
};

module.exports.addToReviews = newReview => {
	const reviewsArray = reviewsData;

	reviewsArray.push(newReview);

	return newReview;
};

module.exports.deleteTheReview = review => {
	try {
		const reviewsArray = reviewsData;
		const newReviewsArray = reviewsArray.filter(
			reviewFromDB =>
				reviewFromDB.login !== review.login &&
				reviewFromDB.user !== review.user &&
				reviewFromDB.review !== review.review
		);

		reviewsData = newReviewsArray;

		return null;
	} catch (error) {
		return error;
	}
};

module.exports.isNewReview = review => {
	const reviewsArray = reviewsData;
	const findDuplicateReviews = reviewsArray
		.filter(item => item.login === review.login)
		.filter(item => item.review === review.review)
		.filter(item => item.user === review.user);

	return !Boolean(findDuplicateReviews.length);
};
