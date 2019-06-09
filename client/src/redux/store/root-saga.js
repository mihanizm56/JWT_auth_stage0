import { takeEvery, takeLatest } from "redux-saga/effects";
import { AUTH_STATE_PENDING, LOGIN_STATE_PENDING, authSaga, loginSaga } from "../modules/auth";

function* rootSaga() {
	yield takeEvery(AUTH_STATE_PENDING, authSaga);
	yield takeEvery(LOGIN_STATE_PENDING, loginSaga);
}

export default rootSaga;
