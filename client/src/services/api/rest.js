export const getApi = ({ endpoint }) => fetch(endpoint);

export const postApi = ({ endpoint, data }) => {
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

export const deleteApi = ({ endpoint, data }) => {
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
