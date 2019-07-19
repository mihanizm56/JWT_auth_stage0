const { getPublicKey } = require("../../services/modules/tokens");

/// sends the public rsa256 key to everyone
module.exports.getPublicKeyController = (req, res) => {
	try {
		const jwt_public_key = getPublicKey();
		console.log("getPublicKeyController send data");
		res.status(200).send({ key: jwt_public_key });
	} catch (error) {
		console.log("error in getPublicKeyController", error);
		res.status(500).send({ data: { key: jwt_public_key }, error: "internal db error" });
	}
};
