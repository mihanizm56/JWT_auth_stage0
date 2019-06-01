const usedRefreshTokens = require("../../../models/tokens").usedRefreshTokens;

module.exports.checkUsedRefreshTokens = token => {
	const filteredExpiredTokens = usedRefreshTokens.tokens.filter(expiredToken => expiredToken === token);

	console.log("filteredExpiredTokens", filteredExpiredTokens.length);

	return !Boolean(filteredExpiredTokens.length);
};

module.exports.saveExpiredToken = token => {
	usedRefreshTokens.tokens.push(token);
};
