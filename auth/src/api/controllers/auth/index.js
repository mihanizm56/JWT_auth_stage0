const { validateUserData } = require("../../services/modules/auth");
const { createTokenPair } = require("../../services/modules/tokens");

module.exports.authController = (req, res) => {
	const userData = req.body;
	console.log("userData //////", userData);
	const isUserDataValid = validateUserData(userData);

	if (!isUserDataValid) {
		console.log("userData is not valid ");
		return res.status(403).send({ error: { message: "user data is not valid" } });
	}

	const { access_token, refresh_token } = createTokenPair(userData.login);

	console.log("user is valid, tokens were sent ", userData);

	return res.status(200).send({ access_token, refresh_token });
};
