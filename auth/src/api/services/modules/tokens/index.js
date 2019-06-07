const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
// const { usedRefreshTokens } = require("../../../models/tokens");

const jwt_secret_key = process.env.JWT_SECRET;
const jwt_public_key = process.env.JWT_PUBLIC;
const timeAccessTokenToExpireSeconds = process.env.TIME_TO_EXPIRE;

module.exports.checkUsedRefreshTokens = refresh_token => {
	const ExpiredToken = mongoose.model("ExpiredToken");
	return ExpiredToken.findOne({ token: refresh_token });
};

module.exports.saveExpiredToken = token => {
	const ExpiredToken = mongoose.model("ExpiredToken");
	return (addedToken = new ExpiredToken({ token }));
};

module.exports.tokenVerify = (req, res, next) => {
	const tokenHeader = req.headers["authorization"];

	if (!tokenHeader) {
		console.log("get no token");
		return res.status(401).send({ error: { message: "did not get any token" } });
	} else {
		const pureToken = tokenHeader.split(" ")[1];

		req.token = pureToken;
		next();
	}
};

module.exports.createTokenPair = userLogin => {
	const access_token = jwt.sign({ user: userLogin }, jwt_secret_key, {
		expiresIn: `${timeAccessTokenToExpireSeconds}s`,
		algorithm: "RS256",
	});
	const refresh_token = jwt.sign({ user: userLogin }, jwt_secret_key);

	console.log("tokens were created");
	return { access_token, refresh_token };
};

module.exports.getPublicKey = () => {
	console.log("public tokens was sent");
	return jwt_public_key;
};
