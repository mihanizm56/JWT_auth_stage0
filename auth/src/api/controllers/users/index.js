const jwt = require("jsonwebtoken");
const addUser = require("../../services/modules/auth").addUser;
const validateUserData = require("../../services/modules/auth").validateUserData;
const checkUsedRefreshTokens = require("../../services/modules/tokens").checkUsedRefreshTokens;
const saveExpiredToken = require("../../services/modules/tokens").saveExpiredToken;
const allUsers = require("../../models/users"); /////TODO remove
const secret = process.env.JWT_SECRET;

module.exports.loginController = (req, res) => {
	const newUser = req.body;

	const userAdded = addUser(newUser);

	if (!userAdded) {
		console.log("user was not added ");
		return res.status(403).send({ error: { message: "user was not added" } });
	}

	const access_token = jwt.sign({ user: newUser.login }, secret, { expiresIn: `${process.env.TIME_TO_EXPIRE}s` });
	console.log("done access_token", access_token);

	const refresh_token = jwt.sign({ user: newUser.login }, secret);
	console.log("done refresh_token", refresh_token);

	console.log("user added ", newUser);

	return res.status(200).send({ access_token, refresh_token });
};

module.exports.loginTESTController = (req, res) => {
	console.log("loginTESTController send data");
	res.status(200);
	res.send(allUsers);
};

module.exports.getSecretController = (req, res) => {
	console.log("getSecretController send data");
	res.status(200);
	res.send({ key: secret });
};

module.exports.authController = (req, res) => {
	const userData = req.body;

	const userValid = validateUserData(userData);

	if (!userValid) {
		console.log("userData is not valid ");
		return res.status(403).send({ error: { message: "user data is not valid" } });
	}

	const access_token = jwt.sign({ user: userData.login }, secret, { expiresIn: `${process.env.TIME_TO_EXPIRE}s` });
	// console.log("done access_token", access_token);

	const refresh_token = jwt.sign({ user: userData.login }, secret);
	// console.log("done refresh_token", refresh_token);

	console.log("user is valid, tokens were sent ", userData);

	return res.status(200).send({ access_token, refresh_token });
};

module.exports.refreshController = (req, res) => {
	const secret = process.env.JWT_SECRET;

	jwt.verify(req.token, secret, (error, userData) => {
		if (error) {
			console.log("get an error ", error.name);

			return res.status(403).send({ error: { message: "bad request", error } });
		}

		const checkIfTokenExpired = checkUsedRefreshTokens(req.token);

		if (checkIfTokenExpired) {
			const access_token = jwt.sign({ user: userData.login }, secret, { expiresIn: "1000s" });
			const refresh_token = jwt.sign({ user: userData.login }, secret);
			console.log("refresh token was not used");
			console.log("refresh_token is valid, tokens were sent ", userData);

			saveExpiredToken(req.token);

			return res.status(200).send({ access_token, refresh_token });
		}

		console.log("refresh token was used");

		return res.status(403).send({ error: { message: "not authorized, refresh_token is invalid", error } });
	});
};
