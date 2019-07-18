import { call, put, putResolve } from "redux-saga/effects";
import { push } from "connected-react-router";
import { stopSubmit } from "redux-form";
import { fetchReviewsRequest, fetchAddReviewRequest, fetchRefreshRequest } from "../../../services/api";
import { getReviewsAction, reviewsErrorAction, putReviewAction, addReviewAction } from "./actions";
import { refreshTokenAction } from "../shared/actions";
import { refreshSaga } from "../auth";

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
	console.log("start fetchAddReviewSaga");
	const { accessToken, refreshToken } = localStorage;
	if (accessToken && refreshToken) {
		try {
			const resultOfRequest = yield call(fetchAddReviewRequest, accessToken, action.payload);
			const { data, error } = resultOfRequest;

			if (!error) {
				console.log("0");
				yield put(putReviewAction(data));
				yield put(push("/reviews"));
			} else if (error === "token expired") {
				try {
					yield call(refreshSaga);
					yield call(fetchAddReviewSaga, action);
				} catch (error) {
					alert("error in fetchAddReviewSaga");
				}
			} else if (error === "review exists") {
				yield put(
					stopSubmit("review-form", {
						login: "The same review exists",
						user: "The same review exists",
					})
				);
				yield put(reviewsErrorAction());
			} else if (error === "enter the correct data") {
				yield put(
					stopSubmit("review-form", {
						login: "Please, enter the correct login",
						user: "Please, enter the correct user",
					})
				);
				yield put(reviewsErrorAction());
			} else {
				throw new Error("check exception in fetchAddReviewSaga");
			}
		} catch (error) {
			console.log("4");
			yield put(
				stopSubmit("review-form", {
					login: "network error, please retry",
					user: "network error, please retry",
				})
			);
			yield put(reviewsErrorAction());
		}
	}
}
