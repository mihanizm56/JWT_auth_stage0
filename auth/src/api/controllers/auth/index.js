const { userCollection } = require("../../services/modules/auth");
const { compareHashedPasswords, makeHashedPassword } = require("../../services/modules/passwords");
const { createTokenPair } = require("../../services/modules/tokens");

module.exports.authController = (req, res) => {
	const userData = req.body;
	console.log("check data of user", userData);

	const { password, login } = userData;

	if (!login || !password) {
		console.log("not full user data");
		return res.status(401).send({ error: "enter the correct user data", data: {} });
	}

	userCollection(login).exec((error, data) => {
		if (error) {
			console.log("check err", error);
			return res.status(500).json({ error: "internal server error", data: {} });
		}

		if (data) {
			const hashedRequestPassword = makeHashedPassword(password);
			const verifyPassword = compareHashedPasswords(hashedRequestPassword, data.password);

			if (verifyPassword) {
				const { access_token, refresh_token, expiresIn } = createTokenPair(userData.login);
				console.log("user is valid, tokens were sent ", userData);

				return res.status(200).send({ data: { access_token, refresh_token, expiresIn }, error: null });
			}

			console.log("user is not authorized");
			return res.status(401).send({ error: "not authorized", data: {} });
		}

		return res.status(400).send({ error: "enter the correct user data", data: {} });
	});
};
