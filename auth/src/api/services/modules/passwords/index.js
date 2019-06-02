const crypto = require("crypto");
const salt = process.env.SALT;

module.exports.makeHashedPassword = purePassword => {
	console.log("makeHashedPassword");
	return crypto.pbkdf2Sync(purePassword, salt, 1000, 64, "sha512");
};

module.exports.compareHashedPasswords = (passwordOne, passwordTwo) => {
	console.log("compareHashedPasswords", passwordOne.toString() === passwordTwo.toString());
	return passwordOne.toString() === passwordTwo.toString();
};
