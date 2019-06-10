import { getRequest } from "./rest";
import { reject } from "q";

export const sleep = (ms, data) => {
	return new Promise(res =>
		setTimeout(() => {
			res(data);
		}, ms)
	);
};

const testReview = {
	login: "test_login",
	user: "test_user",
	review: "test_review",
};

export const fetchLoginRequest = (login, password, user) => {
	console.log("запрос на создание пользователя", login, password, user);

	return new Promise((resolve, reject) =>
		setTimeout(() => {
			console.log("check");
			resolve({ data: { access_token: "test_token", refresh_token: "test_refresh_token" }, message: "success" });
			// reject({ error: "test-error" });
		}, 100)
	);
};

export const fetchAuthRequest = (login, password) => {
	console.log("запрос на получение доступа уже существующему пользователю", login, password);

	return new Promise((resolve, reject) =>
		setTimeout(() => {
			console.log("check");
			resolve({ data: { access_token: "test_token", refresh_token: "test_refresh_token" }, message: "success" });
			// reject({ error: "test-error" });
		}, 100)
	);
};

// export const fetchRefreshRequest = (login, password) => {
// 	console.log("запрос на получение доступа уже существующему пользователю", login, password);

// 	return new Promise((resolve, reject) =>
// 		setTimeout(() => {
// 			console.log("check");
// 			resolve({ data: { access_token: "test_token", refresh_token: "test_refresh_token" }, message: "success" });
// 			// reject({ error: "test-error" });
// 		}, 100)
// 	);
// };

export const fetchReviewsRequest = (ms, data) => {
	console.log("localStorage", localStorage);
	// const {} = localStorage

	return new Promise(res =>
		setTimeout(() => {
			console.log("check");
			res({ data: testReview });
		}, 100)
	);
};

export const fetchAddReviewRequest = (ms, data) => {
	return new Promise(res =>
		setTimeout(() => {
			console.log("check");
			res({ data: testReview });
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
