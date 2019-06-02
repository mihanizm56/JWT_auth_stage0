const randomId = require("uuid");
const crypto = require("crypto");
const { allUsers: usersInDB } = require("../../../models/users");
const { makeHashedPassword } = require("../passwords");
const { compareHashedPasswords } = require("../passwords");

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

		usersInDB[login] = { ...userData, id: randomId(), password: makeHashedPassword(password) };

		return true;
	}
};

module.exports.validateUserData = dataOfValidateUser => {
	const { login, password } = dataOfValidateUser;

	if (!usersInDB[login]) {
		console.log("no login in DB");
		return false;
	}

	if (
		compareHashedPasswords(usersInDB[login].password, makeHashedPassword(password)) &&
		usersInDB[login].login === login
	) {
		console.log("password is correct");
		return true;
	}

	console.log("data of user is not correct");
	return false;
};
