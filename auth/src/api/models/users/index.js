// module.exports.allUsers = {
// 	users: {},
// };

// users: {
// 	"test-login": {
// 		id: "1",
// 		user: "test-user",
// 		password: "test-password",
// 		login: "test-login",
// 	},
// },

const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
	user: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	login: {
		type: String,
		required: true,
		unique: true,
	},
});

mongoose.model("User", usersSchema, "Users");
