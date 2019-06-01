const fetch = require("node-fetch");

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

module.exports.getSecretKey = () => {
	const urlForGetSecretKey = process.env.PATH_TO_KEY;
	console.log("urlForGetSecretKey ", urlForGetSecretKey);
	let secretKey;

	return fetch(urlForGetSecretKey)
		.then(data => data.json())
		.then(data => data.key);
};
