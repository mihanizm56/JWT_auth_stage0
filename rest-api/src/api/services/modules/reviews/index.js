const reviewsData = require("../../../models/reviews");

module.exports.getAllReviews = () => {
	const reviewsArray = reviewsData.reviews;

	return reviewsArray;
};

module.exports.addToReviews = newReview => {
	const reviewsArray = reviewsData.reviews;

	reviewsArray.push(newReview);

	return newReview;
};

module.exports.deleteTheReview = review => {
	try {
		const reviewsArray = reviewsData.reviews;

		const newReviewsArray = reviewsArray.filter(
			reviewFromDB =>
				reviewFromDB.login !== review.login &&
				reviewFromDB.user !== review.user &&
				reviewFromDB.review !== review.review
		);

		reviewsData.reviews = newReviewsArray;

		return null;
	} catch (error) {
		return error;
	}
};

module.exports.isNewReview = review => {
	const reviewsArray = reviewsData.reviews;

	const findDuplicateReviews = reviewsArray
		.filter(item => item.login === review.login)
		.filter(item => item.review === review.review)
		.filter(item => item.user === review.user);

	return !Boolean(findDuplicateReviews.length);
};
