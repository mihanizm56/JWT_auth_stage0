import { getRequest, postRequest, deleteRequest, postRequestWithJWT } from "./rest";
import { HOST_AUTH, HOST_API } from "../../constants";

//// TODO: remove when real api
const testReviews = [
	{
		login: "test_login_1",
		user: "test_user_1",
		review: "test_review_1",
	},
	{
		login: "test_login_2",
		user: "test_user_2",
		review: "test_review_2",
	},
];

export const fetchLoginRequest = (login, password, user) => {
	console.log("запрос на создание пользователя", login, password, user);

	return postRequest({ endpoint: `${HOST_AUTH}/login`, data: { login, password, user } });
	// return new Promise((resolve, reject) =>
	// 	setTimeout(() => {
	// 		console.log("check fetchLoginRequest");
	// 		resolve({
	// 			data: {
	// 				access_token: "test_token",
	// 				refresh_token: "test_refresh_token",
	// 				expiresIn: new Date().getTime() + 200000,
	// 			},
	// 			message: "success",
	// 			error: null,
	// 		});
	// 		// reject({ error: "test-error" });
	// 	}, 100)
	// );
};

export const fetchAuthRequest = (login, password) => {
	console.log("запрос на получение доступа уже существующему пользователю", login, password);

	return postRequest({ endpoint: `${HOST_AUTH}/authentificate`, data: { login, password } });
	// return new Promise((resolve, reject) =>
	// 	setTimeout(() => {
	// 		console.log("check fetchAuthRequest");
	// 		resolve({
	// 			data: {
	// 				access_token: "test_token",
	// 				refresh_token: "test_refresh_token",
	// 				expiresIn: new Date().getTime() + 200000,
	// 			},
	// 			message: "success",
	// 			error: null,
	// 		});
	// 		// reject({ error: "test-error" });
	// 	}, 100)
	// );
};

export const fetchRefreshRequest = refresh_token => {
	console.log("запрос на обновление токена");

	return postRequestWithJWT({ endpoint: `${HOST_AUTH}/refresh`, token: refresh_token });
	// return new Promise((resolve, reject) =>
	// 	setTimeout(() => {
	// 		resolve({
	// 			data: {
	// 				access_token: "test_token_if_refresh",
	// 				refresh_token: "test_refresh_token_refreshed",
	// 				expiresIn: new Date().getTime() + 200000,
	// 			},
	// 			message: "success",
	// 			error: null,
	// 		});
	// 		// reject({ error: "test-error" });
	// 	}, 100)
	// );
};

export const fetchReviewsRequest = () => {
	return getRequest({ endpoint: `${HOST_API}/reviews` });
	// return new Promise(res =>
	// 	setTimeout(() => {
	// 		console.log("check");
	// 		res({ data: { reviews: testReviews } });
	// 	}, 100)
	// );
};

export const fetchAddReviewRequest = (access_token, review) => {
	return postRequestWithJWT({ endpoint: `${HOST_API}/reviews`, token: access_token, data: review });
	// return new Promise(res =>
	// 	setTimeout(() => {
	// 		console.log("check");

	// 		res({ review, error: null, message: "success" });
	// 	}, 100)
	// );
};

export const fetchDeleteReviewRequest = (ms, data) => {
	return new Promise(res =>
		setTimeout(() => {
			console.log("check");
			res({ message: "success" });
		}, 100)
	);
};
