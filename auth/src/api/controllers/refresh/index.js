const jwt = require("jsonwebtoken");
const { checkUsedRefreshTokens, saveExpiredToken, createTokenPair } = require("../../services/modules/tokens");
const jwt_secret_key = process.env.JWT_SECRET;

// validates the refresh token and gives a new pair
module.exports.refreshController = (req, res) => {
	jwt.verify(req.token, jwt_secret_key, (error, userData) => {
		if (error || !userData) {
			console.log("get an error ", error);
			return res.status(400).send({ error: "Некорректные данные", data: {} });
		}

		checkUsedRefreshTokens(req.token).exec((error, data) => {
			if (error) {
				console.log("check err", error);
				return res.status(500).send({ error: "Неверный запрос к существующим refresh токенам", data: {} });
			}

			if (!data && req.token) {
				const { access_token, refresh_token, expiresIn } = createTokenPair(userData.login);

				saveExpiredToken(req.token).save((error, data) => {
					if (error) {
						console.log("check err", error);
						return res.status(500).send({ error: "внутренняя ошибка бд", data: {} });
					}

					console.log("refresh_token is valid, tokens were sent ", userData);
					res.status(200).send({ data: { access_token, refresh_token, expiresIn }, error: null });
				});

				return;
			}

			console.log("refresh token was used");
			return res.status(403).send({ error: "refresh_token был использован", data: {} });
		});
	});
};
