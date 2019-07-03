export const getRequest = ({ endpoint }) => fetch(endpoint).then(data => data.json());

export const postRequest = ({ endpoint, data }) => {
	const paramsObject = {
		mode: "cors",
		method: "post",
		headers: {
			Accept: "application/json",
			"Access-Control-Allow-Origin": "*",
			"Content-Type": "application/json",
			"Cache-Control": "no-cache",
		},
		body: JSON.stringify(data),
	};

	return fetch(endpoint, paramsObject).then(data => data.json());
};

export const postRequestWithJWT = ({ endpoint, data, token }) => {
	const paramsObject = {
		method: "post",
		headers: {
			Accept: "application/json",
			"Access-Control-Allow-Origin": "*",
			"Content-Type": "application/json",
			"Cache-Control": "no-cache",
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(data),
	};

	return fetch(endpoint, paramsObject).then(data => data.json());
};

export const deleteRequest = ({ endpoint, data }) => {
	const paramsObject = {
		method: "delete",
		headers: {
			Accept: "application/json",
			"Access-Control-Allow-Origin": "*",
			"Content-Type": "application/json",
			"Cache-Control": "no-cache",
		},
		body: JSON.stringify(data),
	};

	return fetch(endpoint, paramsObject);
};
