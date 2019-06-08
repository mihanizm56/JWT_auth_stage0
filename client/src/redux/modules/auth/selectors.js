import { createSelector } from "reselect";

const loginState = state => state.loginStorage.login;

export const getLoginState = createSelector(
	[loginState],
	state => state
);
