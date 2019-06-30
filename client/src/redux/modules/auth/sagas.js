import { call, put } from "redux-saga/effects";
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
			const { data: { access_token, refresh_token, expiredIn } = {} } = resultOfRequest;

			if (access_token && refresh_token && expiredIn) {
				yield put(loginSuccessAction());
				saveUser(login);
				saveTokens(access_token, refresh_token, expiredIn);
			} else {
				yield put(loginFailedAction());
				yield call(logoutSaga);
			}
		} catch (error) {
			yield put(loginFailedAction());
			yield call(logoutSaga);
		}
	}
}

export function* loginSaga(action) {
	const { login, password, user } = action.payload;

	if (login && password && user) {
		try {
			const resultOfRequest = yield call(fetchLoginRequest, login, password);
			const { data: { access_token, refresh_token, expiredIn } = {} } = resultOfRequest;

			if (access_token && refresh_token && expiredIn) {
				yield put(loginSuccessAction());
				saveUser(login);
				saveTokens(access_token, refresh_token, expiredIn);
			} else {
				yield put(loginFailedAction());
				yield call(logoutSaga);
			}
		} catch (error) {
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
			const { data: { access_token, refresh_token, expiredIn } = {} } = resultOfRequest;

			if (access_token && refresh_token && expiredIn) {
				console.log("tokens saved && refreshed");
				saveTokens(access_token, refresh_token, expiredIn);
			} else {
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
