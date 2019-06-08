import { fetchLoginAndPassword } from "../..";

export const asyncValidateForAuth = values => {
	return fetchLoginAndPassword().then(data => {
		const resultError = {};

		if (values.email !== data.email) {
			resultError.email = "Неверный логин";
		}

		if (values.password !== data.password) {
			resultError.password = "Неправильный пароль";
		}

		if (resultError.email || resultError.password) throw resultError;

		return data;
	});
};
