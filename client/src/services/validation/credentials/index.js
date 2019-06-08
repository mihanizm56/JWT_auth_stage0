import { sleep } from "../..";

const checkCardTrimValidate = value => {
	let result = true;
	const filteredValue = value.replace(/\s+/g, "");

	if (filteredValue.length !== 16) {
		return false;
	}

	for (const item of filteredValue) {
		const numberItem = parseInt(item);

		if (numberItem !== 0 && !numberItem) {
			result = false;
			break;
		}
	}

	return result;
};

export const asyncValidateForCredentials = values => {
	return sleep(100).then(data => {
		const resultError = {};

		if (!values.cardName) {
			resultError.cardName = "Это обязательное поле";
		}

		if (!values.expDate) {
			resultError.expDate = "Это обязательное поле";
		}

		if (!values.cardNumber) {
			resultError.cardNumber = "Это обязательное поле";
		}

		if (!values.cvv) {
			resultError.cvv = "Это обязательное поле";
		}

		if (!values.cardNumber) {
			resultError.cardNumber = "Может содержать только цифры";
		}

		if (values.cardNumber && values.cardNumber.length < 19) {
			resultError.cardNumber = "Вы ыыели недостаточно цифр";
		}

		if (values.cardNumber && !checkCardTrimValidate(values.cardNumber)) {
			resultError.cardNumber = "Может содержать только цифры";
		}

		if (!+values.cvv) {
			resultError.cvv = "Может содержать только цифры";
		}

		if (resultError.cardName || resultError.expDate || resultError.cardNumber || resultError.cvv) {
			throw resultError;
		}
	});
};

export const syncValidateForCredentials = values => {
	const errors = {};

	if (!values.cardName) {
		errors.cardName = "Это обязательное поле";
	}

	if (!values.expDate) {
		errors.expDate = "Это обязательное поле";
	}

	if (!values.cardNumber) {
		errors.cardNumber = "Может содержать только цифры";
	}

	if (values.cardNumber && values.cardNumber.length < 19) {
		errors.cardNumber = "Вы ыыели недостаточно цифр";
	}

	if (values.cardNumber && !checkCardTrimValidate(values.cardNumber)) {
		errors.cardNumber = "Может содержать только цифры";
	}

	if (!values.cvv) {
		errors.cvv = "Это обязательное поле";
	}

	if (!+values.cvv) {
		errors.cvv = "Может содержать только цифры";
	}

	if (errors.cardName || errors.expDate || errors.cardNumber || errors.cvv) {
		return errors;
	}
};
