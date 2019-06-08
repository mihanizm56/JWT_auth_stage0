export const get = ({ endpoint }) => fetch(endpoint);

export const post = ({ endpoint, data }) => {
	const paramsObject = {
		method: "post",
		headers: {
			Accept: "application/json, text/plain, */*",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	};

	const resultUrl = endpoint;

	return fetch(resultUrl, paramsObject);
};

export const delete = ({endpoint,data}) => {
	const paramsObject = {
		method: "delete",
		headers: {
			Accept: "application/json, text/plain, */*",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	};

	const resultUrl = endpoint;

	return fetch(resultUrl, paramsObject);
};
