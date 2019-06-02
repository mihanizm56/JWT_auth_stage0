const { addUser } = require("../../services/modules/auth");
const { createTokenPair } = require("../../services/modules/tokens");
const { getRefreshPath } = require("../../services/modules/paths");
const { allUsers } = require("../../models/users"); /////TODO to test created users

module.exports.loginController = (req, res) => {
	const newUser = req.body;
	const userAdded = addUser(newUser);

	if (!userAdded) {
		console.log("user was not added ");
		return res.status(403).send({ error: { message: "user was not added" } });
	}

	if (!newUser.login) {
		console.log("user was not added ");
		return res.status(403).send({ error: { message: "user has not sent a login" } });
	}

	const { access_token, refresh_token } = createTokenPair(newUser.login);
	const refreshPath = getRefreshPath();

	console.log("user added ", newUser);

	return res.status(200).send({ access_token, refresh_token, refreshPath });
};

////TODO to test created users
module.exports.loginTESTController = (req, res) => {
	console.log("loginTESTController send data");
	res.status(200).send(allUsers);
};
