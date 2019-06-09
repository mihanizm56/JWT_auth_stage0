import { getRequest } from "./rest";
import { reject } from "q";

const appLoginValues = {
	email: "test@test.com",
	password: "123123",
}; ///TODO MAKE OWN REST API

export const sleep = (ms, data) => {
	return new Promise(res =>
		setTimeout(() => {
			res(data);
		}, ms)
	);
};

// export const fetchLoginRequest = (email, password) => {
// return getRequest({ endpoint: `https://loft-taxi.glitch.me/auth?username=${email}&password=${password}` }).then(data =>
// 	data.json()
// );
// };

const testReview = {
	login: "test_login",
	user: "test_user",
	review: "test_review",
};

export const fetchLoginRequest = ({ login, password }) => {
	return new Promise((resolve, reject) =>
		setTimeout(() => {
			console.log("check");
			resolve({ data: { access_token: "test_token", refresh_token: "test_refresh_token" } });
			// reject({ error: "test-error" });
		}, 100)
	);
};

export const fetchReviewsRequest = (ms, data) => {
	return new Promise(res =>
		setTimeout(() => {
			console.log("check");
			res({ data: testReview });
		}, 100)
	);
};
