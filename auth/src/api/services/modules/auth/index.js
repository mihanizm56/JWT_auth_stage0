const usersInDB = require("../../../models/users").users;
const randomId = require("uuid");
const crypto = require("crypto");

const salt = process.env.SALT;

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

		const hashedPassword = crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512");

		usersInDB[login] = { ...userData, id: randomId(), password: hashedPassword };

		return true;
	}
};

module.exports.validateUserData = dataOfValidateUser => {
	///TODO create func to compare passwords
	const { login, password } = dataOfValidateUser;
	const hashedPassword = crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512");
	const readableHashedPassword = hashedPassword.toString();

	if (!usersInDB[login]) {
		console.log("no login in DB");
		return false;
	}

	if (usersInDB[login].password.toString() === readableHashedPassword && usersInDB[login].login === login) {
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
