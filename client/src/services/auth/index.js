export const saveUser = user => (localStorage.user = user);

export const deleteUser = user => (localStorage.user = "");

export const saveTokens = (accessToken, refreshToken) => {
	localStorage.accessToken = accessToken;
	localStorage.refreshToken = refreshToken;
};

export const deleteTokens = () => {
	localStorage.accessToken = "";
	localStorage.refreshToken = "";
};
