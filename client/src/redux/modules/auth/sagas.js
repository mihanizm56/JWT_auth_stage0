import { call, put } from "redux-saga/effects";
import { loginSuccessAction, loginFailedAction } from "./actions";
import { fetchLoginRequest } from "../../../services";

export function* authSaga(action) {
	const { email, password } = action.payload;

	console.log("check auth saga");
	// if (email && password) {
	// 	const resultOfRequest = yield call(fetchLoginRequest, email, password);
	// 	try {
	// 		if (resultOfRequest.success) {
	// 			yield put(loginSuccessAction());
	// 		} else {
	// 			yield put(loginFailedAction());
	// 		}
	// 	} catch (error) {
	// 		yield put(loginFailedAction()) || alert(error);
	// 	}
	// }
}
