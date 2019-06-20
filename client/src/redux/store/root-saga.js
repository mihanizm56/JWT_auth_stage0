import { takeEvery, takeLatest } from "redux-saga/effects";
import { AUTH_STATE_PENDING, LOGIN_STATE_PENDING, authSaga, loginSaga, LOGOUT, logoutSaga } from "../modules/auth";
import { GET_REVIEWS, fetchReviewsSaga, fetchAddReviewSaga, ADD_THE_REVIEW } from "../modules/reviews";

function* rootSaga() {
	yield takeEvery(AUTH_STATE_PENDING, authSaga);
	yield takeEvery(LOGIN_STATE_PENDING, loginSaga);
	yield takeEvery(LOGOUT, logoutSaga);
	yield takeEvery(GET_REVIEWS, fetchReviewsSaga);
	yield takeEvery(ADD_THE_REVIEW, fetchAddReviewSaga);
}

export default rootSaga;
