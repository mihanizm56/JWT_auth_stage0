export const saveUser = user => (localStorage.user = user);

export const deleteUser = user => (localStorage.user = "");

export const saveTokens = (accessToken, refreshToken, expiresIn) => {
	localStorage.accessToken = accessToken;
	localStorage.refreshToken = refreshToken;
	localStorage.expiresIn = expiresIn;
};

export const deleteTokens = () => {
	localStorage.accessToken = "";
	localStorage.refreshToken = "";
	localStorage.expiresIn = "";
};
