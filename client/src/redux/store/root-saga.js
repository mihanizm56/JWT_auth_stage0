import { takeEvery, takeLatest } from "redux-saga/effects";
import { LOGIN_STATE_PENDING, authSaga } from "../modules/auth";
import { FETCH_ALL_ADDRESSES, FETCH_COORDS, allAddressesFetchSaga, fetchCoordsSaga } from "../modules/addresses";

function* rootSaga() {
	// yield takeEvery(LOGIN_STATE_PENDING, authSaga);
	// yield takeLatest(FETCH_ALL_ADDRESSES, allAddressesFetchSaga);
	// yield takeLatest(FETCH_COORDS, fetchCoordsSaga);
}

export default rootSaga;
