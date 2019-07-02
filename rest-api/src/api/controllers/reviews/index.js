const jwt = require("jsonwebtoken");
const { getAllReviews, isNewReview, deleteTheReview, addToReviews } = require("../../services/modules/reviews");
const { getPublicKey } = require("../../services/modules/auth");

module.exports.getAllReviewsController = (req, res) => {
	getAllReviews().exec((error, data) => {
		if (error) {
			console.log("get an error ", error);
			return res.status(400).send({ error: "Введите коррекные данные", data: {} });
		}

		if (!data) {
			console.log("no reviews");
			return res.status(400).send({ error: "Нет данных", data: {} });
		}

		console.log("reviews were sent");
		return res.status(200).json({ data, error: null });
	});
};

module.exports.reviewsCreateController = (req, res) => {
	const newReview = req.body;
	const { review, login, user } = newReview;

	getPublicKey()
		.then(secret => {
			jwt.verify(req.token, secret, { algorithms: ["RS256"] }, (error, authData) => {
				if (error) {
					console.log("get an error ", error);

					if (error.name === "TokenExpiredError") {
						return res.status(403).send({ error: "token expired", data: {} });
					}

					return res.status(400).send({ error: "Введите коррекные данные", data: {} });
				}

				if (!authData) {
					console.log("reviewsCreateController gets no authData ", newReview);
					return res.status(400).send({ error: "Введите коррекные данные", data: {} });
				}

				if (!review || !login || !user) {
					console.log("not valid request");
					return res.status(400).send({ error: "Введите коррекные данные", data: {} });
				}

				addToReviews({ ...newReview }).save((error, data) => {
					if (error) {
						console.log("get an error ", error);

						if (error.code === 11000) {
							return res.status(403).send({ error: "Отзыв существует", data: {} });
						}

						return res.status(400).send({ error: "Введите коррекные данные", data: {} });
					}

					if (!data) {
						console.log("no reviews");
						return res.status(400).send({ error: "Нет данных", data: {} });
					}

					const { user, login, review } = data;

					if (user && login && review) {
						console.log("the new review was added");
						return res.status(200).json({ data: { user, login, review }, error: null });
					}

					return res.status(400).send({ error: "Введите коррекные данные", data: {} });
				});
			});
		})
		.catch(error => res.status(500).send({ error: "internal server error", data: {} }));
};

module.exports.reviewsDeleteController = (req, res) => {
	const reviewToDelete = req.body;
	const { review, login, user } = reviewToDelete;

	getPublicKey()
		.then(secret => {
			jwt.verify(req.token, secret, (error, authData) => {
				if (error) {
					console.log("get an error ", error);

					if (error.name === "TokenExpiredError") {
						return res.status(403).send({ error: { message: "token expired" } });
					}

					return res.status(403).send({ error: { message: "bad request", error } });
				}

				if (!authData) {
					console.log("reviewsDeleteController gets no data intoken");
					return res.status(400).send({ error: { message: "bad request" } });
				}

				if (!review || !login || !user) {
					console.log("not valid request");
					return res.status(400).send({ error: { message: "bad request" } });
				}

				deleteTheReview(reviewToDelete).exec((error, data) => {
					const { deletedCount } = data;

					if (error) {
						console.log("get an error ", error);
						return res.status(400).send({ error: { message: "bad request" } });
					}

					if (deletedCount) {
						console.log("the review was deleted", reviewToDelete);
						return res.status(200).json({ data: null, message: "the review was deleted" });
					}

					return res.status(400).send({ error: { message: "no review to delete" } });
				});
			});
		})
		.catch(error => res.status(500).send({ error: { message: "internal server error" } }));
};
