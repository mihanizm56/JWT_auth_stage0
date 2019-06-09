import { LOGIN_STATE_SUCCESS, LOGIN_STATE_FAILED, LOGOUT, AUTH_STATE_PENDING, LOGIN_STATE_PENDING } from "./constants";

export const loginSuccessAction = () => ({ type: LOGIN_STATE_SUCCESS });

export const loginFailedAction = () => ({ type: LOGIN_STATE_FAILED });

export const logoutAction = () => ({ type: LOGOUT });

export const loginRequestAction = ({ email, password }) => ({
	type: AUTH_STATE_PENDING,
	payload: { email, password },
});

export const newUserRequestAction = ({ email, password }) => ({
	type: LOGIN_STATE_PENDING,
	payload: { email, password },
});
