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
// 			resultError.email = "Неверный логин";
// 			resultError.password = "Неправильный пароль";
// 		}

// 		if (resultError.email || resultError.password) {
// 			console.log("error", resultError);
// 			throw resultError;
// 		}
// 	});
// };
