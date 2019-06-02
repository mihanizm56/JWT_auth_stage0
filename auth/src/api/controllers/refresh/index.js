const jwt = require("jsonwebtoken");
const { checkUsedRefreshTokens, saveExpiredToken, createTokenPair } = require("../../services/modules/tokens");
const jwt_secret_key = process.env.JWT_SECRET;

module.exports.refreshController = (req, res) => {
	jwt.verify(req.token, jwt_secret_key, (error, userData) => {
		if (error) {
			console.log("get an error ", error.name);

			return res.status(403).send({ error: { message: "bad request", error } });
		}

		const checkIfTokenExpired = checkUsedRefreshTokens(req.token);

		if (checkIfTokenExpired) {
			const { access_token, refresh_token } = createTokenPair(userData.login);
			console.log("refresh_token is valid, tokens were sent ", userData);
			saveExpiredToken(req.token);

			return res.status(200).send({ access_token, refresh_token });
		}

		console.log("refresh token was used");

		return res.status(403).send({ error: { message: "not authorized, refresh_token is invalid", error } });
	});
};
