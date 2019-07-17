const { addUserInDb } = require("../../services/modules/auth");
const { createTokenPair } = require("../../services/modules/tokens");

/// add the new user to db
module.exports.loginUserController = (req, res) => {
	const newUser = req.body;
	console.log("check data of user", newUser);

	const { user, password, login } = newUser;

	if (!login || !password || !user) {
		console.log("not full user data");
		return res.status(400).send({ error: "enter the correct user data", data: {} });
	}

	addUserInDb(newUser).save((error, data) => {
		if (error) {
			console.log("USER SAVE ERROR", error);

			if (error.code === 11000) {
				return res.status(400).send({ error: "user is not new", data: {} });
			}

			return res.status(500).send({ error: "internal db error", data: {} });
		}

		console.log("hunt for userData.login 2", login);

		const { access_token, refresh_token, expiresIn } = createTokenPair(login);
		console.log("user added ", newUser);

		return res.status(200).send({ data: { access_token, refresh_token, expiresIn }, error: null });
	});
};
