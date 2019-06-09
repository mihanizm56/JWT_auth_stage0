import { takeEvery, takeLatest } from "redux-saga/effects";
import { AUTH_STATE_PENDING, LOGIN_STATE_PENDING, authSaga } from "../modules/auth";

function* rootSaga() {
	yield takeEvery(AUTH_STATE_PENDING, authSaga);
	yield takeEvery(LOGIN_STATE_PENDING, authSaga);
}

export default rootSaga;
