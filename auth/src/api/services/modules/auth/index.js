const usersInDB = require("../../../models/users").users;
const randomId = require("uuid");

module.exports.addUser = userData => {
	if (userData) {
		const { user, password, login } = userData;

		if (!user || !password || !login) {
			console.log("data in addUser is not valid");
			return false;
		}

		if (usersInDB[login]) {
			console.log("user is existing");
			return false;
		}

		usersInDB[login] = { ...userData, id: randomId() };

		return true;
	}
};

module.exports.validateUserData = dataOfValidateUser => {
	const { login, password } = dataOfValidateUser;

	if (!usersInDB[login]) {
		console.log("no login in DB");
		return false;
	}

	if (usersInDB[login].password === password && usersInDB[login].login === login) {
		console.log("password is correct");
		return true;
	}

	console.log("data of user is not correct");
	return false;
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
