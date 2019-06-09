import { call, put } from "redux-saga/effects";
import { loginSuccessAction, loginFailedAction } from "./actions";
import { fetchLoginRequest, fetchAuthRequest } from "../../../services";

export function* authSaga(action) {
	const { email, password } = action.payload;

	if (email && password) {
		try {
			const resultOfRequest = yield call(fetchAuthRequest, email, password);

			if (resultOfRequest.data) {
				yield put(loginSuccessAction());
			} else {
				yield put(loginFailedAction());
			}
		} catch (error) {
			yield put(loginFailedAction());
		}
	}
}

export function* loginSaga(action) {
	const { email, password, user } = action.payload;

	if (email && password && user) {
		try {
			const resultOfRequest = yield call(fetchLoginRequest, email, password);

			if (resultOfRequest.data) {
				yield put(loginSuccessAction());
			} else {
				yield put(loginFailedAction());
			}
		} catch (error) {
			yield put(loginFailedAction());
		}
	}
}
