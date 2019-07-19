const jwt = require("jsonwebtoken");
const { checkUsedRefreshTokens, saveExpiredToken, createTokenPair } = require("../../services/modules/tokens");
const jwt_secret_key = process.env.JWT_SECRET;

// validates the refresh token and gives a new pair
module.exports.refreshController = (req, res) => {
	jwt.verify(req.token, jwt_secret_key, (error, userData) => {
		if (error || !userData) {
			console.log("token not valid", error);
			return res.status(400).send({ error: "token not valid", data: {} });
		}

		checkUsedRefreshTokens(req.token).exec((error, data) => {
			if (error) {
				console.log("not valid request for tokens", error);
				return res.status(500).send({ error: "internal db error", data: {} });
			}

			if (!data && req.token && userData.user) {
				const { access_token, refresh_token, expiresIn } = createTokenPair(userData.user);

				saveExpiredToken(req.token).save((error, data) => {
					if (error) {
						console.log("error in saveExpiredToken", error);
						return res.status(500).send({ error: "internal db error", data: {} });
					}

					console.log("refresh_token is valid, tokens were sent ", userData);
					res.status(200).send({ data: { access_token, refresh_token, expiresIn }, error: null });
				});

				return;
			}

			console.log("refresh token was used");
			return res.status(401).send({ error: "token was used", data: {} });
		});
	});
};
