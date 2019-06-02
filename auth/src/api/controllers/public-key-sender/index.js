const { getPublicKey } = require("../../services/modules/tokens");

module.exports.getPublicKeyController = (req, res) => {
	const jwt_public_key = getPublicKey();
	console.log("getPublicKeyController send data", jwt_public_key);
	res.status(200).send({ key: jwt_public_key });
};
