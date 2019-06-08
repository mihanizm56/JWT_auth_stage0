import { takeEvery, takeLatest } from "redux-saga/effects";
import { LOGIN_STATE_PENDING, authSaga } from "../modules/auth";

function* rootSaga() {
	yield takeEvery(LOGIN_STATE_PENDING, authSaga);
}

export default rootSaga;
