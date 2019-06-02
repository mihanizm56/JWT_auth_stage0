const jwt = require("jsonwebtoken");
const addUser = require("../../services/modules/auth").addUser;
const validateUserData = require("../../services/modules/auth").validateUserData;
const checkUsedRefreshTokens = require("../../services/modules/tokens").checkUsedRefreshTokens;
const saveExpiredToken = require("../../services/modules/tokens").saveExpiredToken;
const allUsers = require("../../models/users"); /////TODO remove
const jwt_secret_key = process.env.JWT_SECRET;
const jwt_public_key = process.env.JWT_PUBLIC;

const refreshPath = `http://localhost:${process.env.SERVER_PORT}/auth/refresh`; ///TODO refactor

module.exports.loginController = (req, res) => {
	const newUser = req.body;

	const userAdded = addUser(newUser);

	if (!userAdded) {
		console.log("user was not added ");
		return res.status(403).send({ error: { message: "user was not added" } });
	}

	console.log("/////////////", jwt_secret_key);

	const access_token = jwt.sign({ user: newUser.login }, jwt_secret_key, {
		expiresIn: `${process.env.TIME_TO_EXPIRE}s`,
		algorithm: "RS256",
	});
	const refresh_token = jwt.sign({ user: newUser.login }, jwt_secret_key);

	console.log("user added ", newUser);

	return res.status(200).send({ access_token, refresh_token, refreshPath: refreshPath });
};

module.exports.loginTESTController = (req, res) => {
	console.log("loginTESTController send data");
	res.status(200).send(allUsers);
};

module.exports.getPublicKeyController = (req, res) => {
	console.log("getPublicKeyController send data");
	res.status(200).send({ key: jwt_public_key });
};

module.exports.authController = (req, res) => {
	const userData = req.body;

	const userValid = validateUserData(userData);

	if (!userValid) {
		console.log("userData is not valid ");
		return res.status(403).send({ error: { message: "user data is not valid" } });
	}

	const access_token = jwt.sign({ user: userData.login }, jwt_secret_key, {
		expiresIn: `${process.env.TIME_TO_EXPIRE}s`,
	});
	const refresh_token = jwt.sign({ user: userData.login }, jwt_secret_key);

	console.log("user is valid, tokens were sent ", userData);

	return res.status(200).send({ access_token, refresh_token });
};

module.exports.refreshController = (req, res) => {
	jwt.verify(req.token, jwt_secret_key, (error, userData) => {
		if (error) {
			console.log("get an error ", error.name);

			return res.status(403).send({ error: { message: "bad request", error } });
		}

		const checkIfTokenExpired = checkUsedRefreshTokens(req.token);

		if (checkIfTokenExpired) {
			const access_token = jwt.sign({ user: userData.login }, jwt_secret_key, { expiresIn: "1000s" });
			const refresh_token = jwt.sign({ user: userData.login }, jwt_secret_key);
			console.log("refresh token was not used");
			console.log("refresh_token is valid, tokens were sent ", userData);

			saveExpiredToken(req.token);

			return res.status(200).send({ access_token, refresh_token });
		}

		console.log("refresh token was used");

		return res.status(403).send({ error: { message: "not authorized, refresh_token is invalid", error } });
	});
};
