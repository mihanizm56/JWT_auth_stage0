import { takeEvery, takeLatest } from "redux-saga/effects";
import { AUTH_STATE_PENDING, LOGIN_STATE_PENDING, authSaga, loginSaga, LOGOUT, logoutSaga } from "../modules/auth";
import { GET_REVIEWS, fetchReviewsSaga } from "../modules/reviews";

function* rootSaga() {
	yield takeEvery(AUTH_STATE_PENDING, authSaga);
	yield takeEvery(LOGIN_STATE_PENDING, loginSaga);
	yield takeEvery(LOGOUT, logoutSaga);
	yield takeEvery(GET_REVIEWS, fetchReviewsSaga);
}

export default rootSaga;
