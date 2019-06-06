// module.exports.usedRefreshTokens = {
// 	tokens: [
// 		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidGVzdC1sb2dpbmFzZCIsImlhdCI6MTU1OTQyOTUxMX0.4yk9a1X1HstEaI_i3qo_Lvq5HxzeCu2hpOAR1Va1Rpo",
// 	],
// };

const mongoose = require("mongoose");

const expiredTokensSchema = new mongoose.Schema({
	token: {
		type: String,
		required: true,
		unique: true,
	},
});

mongoose.model("ExpiredToken", expiredTokensSchema, "ExpiredTokens");
