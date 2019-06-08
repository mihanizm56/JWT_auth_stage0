export const combineFunctionsOnClick = (...args) => {
	args.forEach(func => func());
};

export const nullFunc = () => {};

export const preventDefault = event => event.preventDefault();

export const normalizeToEmpty = value => value.replace(/^\s+/, "");

export const normalizeCardName = value =>
	value
		.replace(/^\s+/, "")
		.replace(/^[а-яА-ЯёЁ0-9!@#$&*"'-=_+]+$/, "")
		.toUpperCase();
