export const saveUser = user => (localStorage.user = user);

export const deleteUser = user => (localStorage.user = "");

export const saveTokens = (accessToken, refreshToken, expiredIn) => {
	localStorage.accessToken = accessToken;
	localStorage.refreshToken = refreshToken;
	localStorage.expiredIn = expiredIn;
};

export const deleteTokens = () => {
	localStorage.accessToken = "";
	localStorage.refreshToken = "";
};
