import { LOGIN_STATE_SUCCESS, LOGIN_STATE_FAILED, LOGOUT, LOGIN_STATE_PENDING } from "./constants";

export const loginSuccessAction = () => ({ type: LOGIN_STATE_SUCCESS });

export const loginFailedAction = () => ({ type: LOGIN_STATE_FAILED });

export const logoutAction = () => ({ type: LOGOUT });

export const loginRequestAction = (email, password) => ({ type: LOGIN_STATE_PENDING, payload: { email, password } });
