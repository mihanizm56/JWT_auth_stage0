import { get, post, delete } from "./rest";

export const sleep = (ms, data) => {
	return new Promise(res =>
		setTimeout(() => {
			res(data);
		}, ms)
	);
};

// export const fetchLoginRequest = (email, password) => {
// 	return get({ endpoint: `https://loft-taxi.glitch.me/auth?username=${email}&password=${password}` }).then(data =>
// 		data.json()
// 	);
// };
