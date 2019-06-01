const jwt = require("jsonwebtoken");

const getAllReviews = require("../../services/modules/reviews").getAllReviews;
const isNewReview = require("../../services/modules/reviews").isNewReview;
const deleteTheReview = require("../../services/modules/reviews").deleteTheReview;
const addToReviews = require("../../services/modules/reviews").addToReviews;
const getSecretKey = require("../../services/modules/auth").getSecretKey;
const getSuccessMessage = require("../../../utils").getSuccessMessage;

module.exports.getAllReviewsController = (req, res) => {
	const allReviews = getAllReviews();
	console.log("reviewsController send data");
	res.status(200);
	res.json(allReviews);
};

module.exports.reviewsCreateController = (req, res) => {
	getSecretKey().then(secret => {
		jwt.verify(req.token, secret, (error, authData) => {
			if (error) {
				console.log("get an error ", error.name);

				if (error.name === "TokenExpiredError") {
					return res.status(403).send({ error: { message: "token expired" } });
				}

				return res.status(403).send({ error: { message: "bad request", error } });
			}

			console.log("get data from token ", authData);

			const newReview = req.body;
			const { review, login, user } = newReview;
			const allReviews = getAllReviews();
			const checkForNewReview = isNewReview(newReview);

			if (!review || !login || !user) {
				console.log("not valid request");

				return res.status(400).send({ error: { message: "bad request" } });
			}

			if (!checkForNewReview) {
				console.log("not a new review");

				return res.status(400).send({ error: { message: "bad request" } });
			}

			const addedReview = addToReviews(newReview);

			console.log("reviewsCreateController added review ", addedReview);
			return res.status(200).json(getSuccessMessage(addedReview));
		});
	});
};

module.exports.reviewsDeleteController = (req, res) => {
	getSecretKey().then(secret => {
		jwt.verify(req.token, secret, (error, authData) => {
			if (error) {
				console.log("get an error ", error);
				return res.status(403).send({ error: { message: "there is no review like this" } });
			}

			const reviewToDelete = req.body;
			const { review, login, user } = reviewToDelete;
			const allReviews = getAllReviews();
			const checkForNewReview = isNewReview(reviewToDelete);
			console.log("get reviewToDelete in reviewsDeleteController ", reviewToDelete);

			if (!review || !login || !user) {
				console.log("not valid request");

				return res.status(400).send({ error: { message: "bad request" } });
			}

			if (checkForNewReview) {
				console.log("not an existed review");

				return res.status(400).send({ error: { message: "bad request" } });
			}

			const detetedOperation = deleteTheReview(reviewToDelete);

			if (detetedOperation === null) {
				console.log("reviewsDeleteController deleted review ", reviewToDelete);

				return res.status(200).json(getSuccessMessage(reviewToDelete));
			} else {
				return res.status(400).send({ error: { message: "bad request" } });
			}
		});
	});
};
