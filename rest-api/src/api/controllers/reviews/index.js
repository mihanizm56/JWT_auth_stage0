const jwt = require("jsonwebtoken");
const { getAllReviews, isNewReview, deleteTheReview, addToReviews } = require("../../services/modules/reviews");
const { getPublicKey } = require("../../services/modules/auth");
const { getSuccessMessage } = require("../../../utils");

module.exports.getAllReviewsController = (req, res) => {
	const allReviews = getAllReviews();
	console.log("reviewsController send data");
	res.status(200);
	res.json(allReviews);
};

module.exports.reviewsCreateController = (req, res) => {
	getPublicKey().then(secret => {
		// console.log("get secret", secret);
		jwt.verify(req.token, secret, { algorithms: ["RS256"] }, (error, authData) => {
			if (!authData) {
				console.log("reviewsCreateController gets no authData ", newReview);
				return res.status(400).send({ error: { message: "bad request" } });
			}
			console.log("get data from token ", authData);
			const newReview = req.body;
			const { review, login, user } = newReview;

			if (error) {
				console.log("get an error ", error);

				if (error.name === "TokenExpiredError") {
					return res.status(403).send({ error: { message: "token expired" } });
				}

				return res.status(403).send({ error: { message: "bad request", error } });
			}

			if (!review || !login || !user) {
				console.log("not valid request");
				return res.status(400).send({ error: { message: "bad request" } });
			}

			const allReviews = getAllReviews();
			const checkForNewReview = isNewReview(newReview);

			if (!checkForNewReview) {
				console.log("not a new review");
				return res.status(400).send({ error: { message: "bad request" } });
			}

			console.log("reviewsCreateController added review ", newReview);
			return res.status(200).json(getSuccessMessage(addToReviews(newReview)));
		});
	});
};

module.exports.reviewsDeleteController = (req, res) => {
	getPublicKey().then(secret => {
		jwt.verify(req.token, secret, (error, authData) => {
			if (error) {
				console.log("get an error ", error);
				return res.status(403).send({ error: { message: "there is no review like this" } });
			}

			if (!review || !login || !user) {
				console.log("not valid request");

				return res.status(400).send({ error: { message: "bad request" } });
			}

			const reviewToDelete = req.body;
			const { review, login, user } = reviewToDelete;
			const allReviews = getAllReviews();
			const checkForNewReview = isNewReview(reviewToDelete);
			const detetedOperation = deleteTheReview(reviewToDelete);
			console.log("get reviewToDelete in reviewsDeleteController ", reviewToDelete);

			if (checkForNewReview) {
				console.log("not an existed review");

				return res.status(400).send({ error: { message: "bad request" } });
			}

			if (detetedOperation === null) {
				console.log("reviewsDeleteController deleted review ", reviewToDelete);

				return res.status(200).json(getSuccessMessage(reviewToDelete));
			} else {
				return res.status(400).send({ error: { message: "bad request" } });
			}
		});
	});
};
