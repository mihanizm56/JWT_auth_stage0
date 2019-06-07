const fetch = require("node-fetch");

// token verification
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

// fetch to get the public key of rsa256
module.exports.getPublicKey = () => {
	const urlForGetPublicKey = process.env.PATH_TO_PUBLIC_KEY;
	console.log("urlForGetPublicKey ", urlForGetPublicKey);

	return fetch(urlForGetPublicKey)
		.then(data => data.json())
		.then(data => data.key)
		.catch(error => console.log("getPublicKey fetch gets an error", error) || null);
};
