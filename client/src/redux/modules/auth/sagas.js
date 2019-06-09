import { call, put } from "redux-saga/effects";
import { loginSuccessAction, loginFailedAction } from "./actions";
import { fetchLoginRequest } from "../../../services";

export function* authSaga(action) {
	const { email, password } = action.payload;

	if (email && password) {
		try {
			const resultOfRequest = yield call(fetchLoginRequest, email, password);
			console.log("/////", resultOfRequest);

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
