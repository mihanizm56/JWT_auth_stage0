import { fetchLoginRequest } from "../../api";

// export const asyncValidateForAuth = values => {
// 	return fetchLoginRequest().then(responce => {
// 		console.log("check data", data);
// 		const resultError = {};
// 		const { data } = responce;

// 		const { access_token, refresh_token, error } = data;

// 		if (error) {
// 			return alert("server error");
// 		}

// 		if (!data || !access_token || !refresh_token) {
// 			resultError.login = "Неверный логин";
// 			resultError.password = "Неправильный пароль";
// 		}

// 		if (resultError.login || resultError.password) {
// 			console.log("error", resultError);
// 			throw resultError;
// 		}
// 	});
// };
