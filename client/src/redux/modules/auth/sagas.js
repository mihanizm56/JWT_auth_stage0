import { call, put } from "redux-saga/effects";
import { stopSubmit } from "redux-form";
import { loginSuccessAction, loginFailedAction } from "./actions";
import {
	fetchLoginRequest,
	fetchAuthRequest,
	deleteUser,
	deleteTokens,
	saveUser,
	saveTokens,
	fetchRefreshRequest,
} from "../../../services";

export function* authSaga(action) {
	const { login, password } = action.payload;

	if (login && password) {
		try {
			const resultOfRequest = yield call(fetchAuthRequest, login, password);
			console.log("check resultOfRequest", resultOfRequest);
			const { data: { access_token, refresh_token, expiresIn } = {}, error } = resultOfRequest;

			if (access_token && refresh_token && expiresIn && !error) {
				yield put(loginSuccessAction());
				saveUser(login);
				saveTokens(access_token, refresh_token, expiresIn);
			} else {
				yield put(stopSubmit("auth", { login: "enter correct user data", password: "enter correct user data" }));
				yield put(loginFailedAction());
				yield call(logoutSaga);
			}
		} catch (error) {
			yield put(stopSubmit("auth", { login: "network error, please retry", password: "network error, please retry" }));
			yield put(loginFailedAction());
			yield call(logoutSaga);
		}
	}
}

export function* loginSaga(action) {
	const { login, password, user } = action.payload;

	if (login && password && user) {
		try {
			const resultOfRequest = yield call(fetchLoginRequest, login, password, user);
			const { data: { access_token, refresh_token, expiresIn } = {}, error } = resultOfRequest;
			console.log("check fetchLoginRequest", resultOfRequest);

			if (access_token && refresh_token && expiresIn && !error) {
				yield put(loginSuccessAction());
				saveUser(login);
				saveTokens(access_token, refresh_token, expiresIn);
			} else if (error) {
				alert("error", error); /////TODO remove and make good enough error description
				yield put(loginFailedAction());
				yield call(logoutSaga);
			}
		} catch (error) {
			console.log("!!!!!!!!!!!!!!!!!!!!!!!1", error);
			yield put(loginFailedAction());
			yield call(logoutSaga);
		}
	}
}

export function* refreshSaga(actions) {
	const { refreshToken } = localStorage;
	console.log("refreshSaga goes");

	if (refreshToken) {
		try {
			const resultOfRequest = yield call(fetchRefreshRequest, refreshToken);
			const { data: { access_token, refresh_token, expiresIn } = {}, error } = resultOfRequest;

			if (access_token && refresh_token && expiresIn) {
				console.log("tokens saved && refreshed");
				saveTokens(access_token, refresh_token, expiresIn);
			} else {
				alert("error", error); /////TODO remove and make good enough error description
				yield put(loginFailedAction());
				yield call(logoutSaga);
			}
		} catch (error) {
			yield put(loginFailedAction());
		}
	} else {
		console.log("no refresh_token in localStorage");
	}
}

export function* logoutSaga() {
	deleteUser();
	deleteTokens();
	console.log("user was removed");
}
