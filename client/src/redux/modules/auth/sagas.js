import { call, put } from "redux-saga/effects";
import { loginSuccessAction, loginFailedAction } from "./actions";
import { fetchLoginRequest, fetchAuthRequest, deleteUser, deleteTokens, saveUser, saveTokens } from "../../../services";

export function* authSaga(action) {
	const { login, password } = action.payload;

	if (login && password) {
		try {
			const resultOfRequest = yield call(fetchAuthRequest, login, password);
			console.log("check resultOfRequest", resultOfRequest);
			const { data: { access_token, refresh_token } = {} } = resultOfRequest;

			if (access_token && refresh_token) {
				yield put(loginSuccessAction());
				saveUser(login);
				saveTokens(access_token, refresh_token);
			} else {
				yield put(loginFailedAction());
			}
		} catch (error) {
			yield put(loginFailedAction());
		}
	}
}

export function* loginSaga(action) {
	const { login, password, user } = action.payload;

	if (login && password && user) {
		try {
			const resultOfRequest = yield call(fetchLoginRequest, login, password);
			const { data: { access_token, refresh_token } = {} } = resultOfRequest;

			if (access_token && refresh_token) {
				yield put(loginSuccessAction());
				saveUser(login);
				saveTokens(access_token, refresh_token);
			} else {
				yield put(loginFailedAction());
			}
		} catch (error) {
			yield put(loginFailedAction());
		}
	}
}

export function* logoutSaga() {
	deleteUser();
	deleteTokens();
	console.log("user was removed");
}
