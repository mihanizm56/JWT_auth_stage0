import { call, put, fork } from "redux-saga/effects";
import { push } from "connected-react-router";
import { stopSubmit } from "redux-form";
import { fetchReviewsRequest, fetchAddReviewRequest, fetchRefreshRequest } from "../../../services/api";
import { getReviewsAction, reviewsErrorAction, putReviewAction } from "./actions";
import { refreshTokenAction } from "../shared/actions";

export function* fetchReviewsSaga(action) {
	try {
		const resultOfRequest = yield call(fetchReviewsRequest);
		console.log("fetchReviewsRequest result ", resultOfRequest);
		const { data } = resultOfRequest;

		if (data) {
			yield put(getReviewsAction(data));
		}
	} catch (error) {
		yield put(reviewsErrorAction());
	}
}

export function* fetchAddReviewSaga(action) {
	const { accessToken, refresh_token } = localStorage;
	try {
		const resultOfRequest = yield call(fetchAddReviewRequest, accessToken, action.payload);
		console.log("resultOfRequest", resultOfRequest);
		const { data, error } = resultOfRequest;

		if (data && !error) {
			yield put(putReviewAction(data));
			yield put(push("/reviews"));
		} else if (error === "token expired" && accessToken && refresh_token) {
			yield put(refreshTokenAction());
			yield fetchAddReviewSaga(action);
		} else if (error === "review exists") {
			yield fork(
				stopSubmit("review-form", {
					login: "The same review exists",
					user: "The same review exists",
				})
			);
			yield fork(reviewsErrorAction());
		} else if (error === "enter the correct data") {
			yield fork(
				stopSubmit("review-form", {
					login: "Please, enter the correct login",
					user: "Please, enter the correct user",
				})
			);
			yield fork(reviewsErrorAction());
		}
	} catch (error) {
		yield fork(
			stopSubmit("review-form", {
				login: "network error, please retry",
				user: "network error, please retry",
			})
		);
		yield fork(reviewsErrorAction());
	}
}
