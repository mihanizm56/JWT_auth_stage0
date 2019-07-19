const jwt = require("jsonwebtoken");
const { getAllReviews, isNewReview, deleteTheReview, addToReviews } = require("../../services/modules/reviews");
const { getPublicKey } = require("../../services/modules/auth");

module.exports.getAllReviewsController = (req, res) => {
	getAllReviews().exec((error, data) => {
		if (error) {
			console.log("get an error ", error);
			return res.status(400).send({ error: "enter the correct data", data: {} });
		}

		if (!data) {
			console.log("no reviews");
			return res.status(400).send({ error: "no data", data: {} });
		}

		console.log("reviews were sent");
		return res.status(200).json({ data, error: null });
	});
};

module.exports.reviewsCreateController = (req, res) => {
	const newReview = req.body;
	console.log("newReview ", newReview);
	const { review, login, user } = newReview;

	getPublicKey()
		.then(secret => {
			jwt.verify(req.token, secret, { algorithms: ["RS256"] }, (error, authData) => {
				if (error) {
					console.log("get an error ", error);

					if (error.message === "invalid signature") {
						return res.status(401).send({ error: "invalid token", data: {} });
					}

					if (error.name === "TokenExpiredError") {
						return res.status(401).send({ error: "token expired", data: {} });
					}

					return res.status(400).send({ error: "enter the correct review data", data: {} });
				}

				if (!authData) {
					console.log("reviewsCreateController gets no authData ", newReview);
					return res.status(401).send({ error: "enter the correct token", data: {} });
				}

				if (!review || !login || !user) {
					console.log("not valid request");
					return res.status(400).send({ error: "enter the correct data", data: {} });
				}

				if (authData) {
					const validUserLogin = authData.user;
					if (validUserLogin !== login) {
						return res.status(401).send({ error: "not enough roots", data: {} });
					}
				}

				addToReviews({ ...newReview }).save((error, data) => {
					if (error) {
						console.log("get an error", error);

						if (error.code === 11000) {
							return res.status(403).send({ error: "review exists", data: {} });
						}

						return res.status(400).send({ error: "enter the correct data", data: {} });
					}

					if (!data) {
						console.log("no review");
						return res.status(400).send({ error: "enter the correct data", data: {} });
					}

					const { user, login, review } = data;

					if (user && login && review) {
						console.log("the new review was added");
						return res.status(200).json({ data: { user, login, review }, error: null });
					}

					return res.status(400).send({ error: "enter the correct data", data: {} });
				});
			});
		})
		.catch(error => console.log(error, error) || res.status(500).send({ error: "internal server error", data: {} }));
};
