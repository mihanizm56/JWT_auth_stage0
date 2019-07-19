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
			console.log("check resultOfRequest authSaga", resultOfRequest);
			const { data: { access_token, refresh_token, expiresIn } = {}, error } = resultOfRequest;

			if (access_token && refresh_token && expiresIn && !error) {
				yield put(loginSuccessAction());
				saveUser(login);
				saveTokens(access_token, refresh_token, expiresIn);
			} else if (error === "enter the correct user data") {
				yield put(stopSubmit("auth", { login: "enter correct user data", password: "enter correct user data" }));
				yield put(loginFailedAction());
			} else if (error === "internal server error") {
				stopSubmit("auth", {
					login: "network connection error, please retry",
					user: "network connection error, please retry",
				});
				yield put(loginFailedAction());
			} else if (error === "not authorized") {
				yield put(stopSubmit("auth", { login: "enter correct user data", password: "enter correct user data" }));
				yield put(loginFailedAction());
			}
		} catch (error) {
			yield put(
				stopSubmit("auth", {
					login: "network connection error, please retry",
					user: "network connection error, please retry",
				})
			);
			yield put(loginFailedAction());
		}
	}
}

export function* loginSaga(action) {
	const { login, password, user } = action.payload;

	if (login && password && user) {
		try {
			const resultOfRequest = yield call(fetchLoginRequest, login, password, user);
			const { data: { access_token, refresh_token, expiresIn } = {}, error } = resultOfRequest;
			console.log("check fetchLoginRequest loginSaga", resultOfRequest);

			if (access_token && refresh_token && expiresIn && !error) {
				yield put(loginSuccessAction());
				saveUser(login);
				saveTokens(access_token, refresh_token, expiresIn);
			} else if (error === "user exists") {
				yield put(
					stopSubmit("login", {
						login: "user exists",
						user: "user exists",
						password: "user exists",
					})
				);
				yield put(loginFailedAction());
			} else if (error === "internal server error") {
				yield put(
					stopSubmit("login", {
						login: "network connection error, please retry",
						user: "network connection error, please retry",
						password: "network connection error, please retry",
					})
				);
				yield put(loginFailedAction());
			} else if (error === "enter the correct user data") {
				yield put(
					stopSubmit("login", {
						login: "enter correct user data",
						user: "enter correct user data",
						password: "enter correct user data",
					})
				);
				yield put(loginFailedAction());
			}
		} catch (error) {
			console.log("error in loginSaga", error);

			yield put(
				stopSubmit("login", {
					login: "network connection error, please retry",
					user: "network connection error, please retry",
					password: "network connection error, please retry",
				})
			);
			yield put(loginFailedAction());
		}
	}
}

export function* refreshSaga() {
	const { refreshToken } = localStorage;
	console.log("refreshSaga goes");

	if (refreshToken) {
		try {
			const resultOfRequest = yield call(fetchRefreshRequest, refreshToken);
			const { data: { access_token, refresh_token, expiresIn } = {}, error } = resultOfRequest;

			if (access_token && refresh_token && expiresIn && !error) {
				console.log("tokens saved && refreshed");
				yield saveTokens(access_token, refresh_token, expiresIn);
			} else if (error === "token not valid") {
				console.log("error token not valid");
				yield call(logoutSaga);
				yield put(loginFailedAction());
			} else if (error === "internal server error") {
				console.log("error internal server error");
				yield call(logoutSaga);
				yield put(loginFailedAction());
			} else if (error === "token was used") {
				console.log("error internal server error");
				yield call(logoutSaga);
				yield put(loginFailedAction());
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
