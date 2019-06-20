// import { getRequest } from "./rest";
import { reject } from "q";

export const sleep = (ms, data) => {
	return new Promise(res =>
		setTimeout(() => {
			res(data);
		}, ms)
	);
};

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

	return new Promise((resolve, reject) =>
		setTimeout(() => {
			console.log("check fetchLoginRequest");
			resolve({ data: { access_token: "test_token", refresh_token: "test_refresh_token" }, message: "success" });
			// reject({ error: "test-error" });
		}, 100)
	);
};

export const fetchAuthRequest = (login, password) => {
	console.log("запрос на получение доступа уже существующему пользователю", login, password);

	return new Promise((resolve, reject) =>
		setTimeout(() => {
			console.log("check fetchAuthRequest");
			resolve({ data: { access_token: "test_token", refresh_token: "test_refresh_token" }, message: "success" });
			// reject({ error: "test-error" });
		}, 100)
	);
};

export const fetchRefreshRequest = (login, password) => {
	console.log("запрос на обновление токена", login, password);

	return new Promise((resolve, reject) =>
		setTimeout(() => {
			console.log("check refresh fetchRefreshRequest");
			resolve({ data: { access_token: "test_token", refresh_token: "test_refresh_token" }, message: "success" });
			// reject({ error: "test-error" });
		}, 100)
	);
};

export const fetchReviewsRequest = (ms, data) => {
	return new Promise(res =>
		setTimeout(() => {
			console.log("check");
			res({ data: { reviews: testReviews } });
		}, 100)
	);
};

export const fetchAddReviewRequest = review => {
	return new Promise(res =>
		setTimeout(() => {
			console.log("check");
			res({ review });
		}, 100)
	);
};

export const fetchDeleteReviewRequest = (ms, data) => {
	return new Promise(res =>
		setTimeout(() => {
			console.log("check");
			res({ message: "success" });
		}, 100)
	);
};
