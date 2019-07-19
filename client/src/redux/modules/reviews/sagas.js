import { call, put, putResolve } from "redux-saga/effects";
import { push } from "connected-react-router";
import { stopSubmit } from "redux-form";
import { fetchReviewsRequest, fetchAddReviewRequest, fetchRefreshRequest } from "../../../services/api";
import { getReviewsAction, reviewsErrorAction, putReviewAction, addReviewAction } from "./actions";
import { refreshTokenAction } from "../shared/actions";
import { refreshSaga, logoutSaga } from "../auth";

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
				yield put(putReviewAction(data));
				yield put(push("/reviews"));
			} else if (error === "token expired") {
				try {
					yield call(refreshSaga);
					yield call(fetchAddReviewSaga, action);
				} catch (error) {
					console.log("error in fetchAddReviewSaga, logout", error);
					yield call(logoutSaga);
				}
			} else if (error === "review exists") {
				yield put(
					stopSubmit("review-form", {
						review: "The same review exists",
					})
				);
				yield put(reviewsErrorAction());
			} else if (error === "enter the correct review data") {
				yield put(
					stopSubmit("review-form", {
						login: "Please, enter you login here",
						user: "Please, enter the correct user",
						review: "Please, enter the correct unique review",
					})
				);
				yield put(reviewsErrorAction());
			} else if (error === "enter the correct token") {
				console.log("error in token, logout", error);
				yield call(logoutSaga);
				yield put(reviewsErrorAction());
			} else if (error === "not enough roots") {
				yield put(
					stopSubmit("review-form", {
						login: "Please, enter you login here",
						user: "Please, enter the correct user",
						review: "Please, enter the correct unique review",
					})
				);
				yield put(reviewsErrorAction());
			} else if (error === "internal server error") {
				yield put(
					stopSubmit("review-form", {
						login: "network connection error, please retry",
						user: "network connection error, please retry",
						review: "network connection error, please retry",
					})
				);
				yield put(reviewsErrorAction());
			} else {
				throw new Error("oops, something goes wrong");
			}
		} catch (error) {
			yield put(
				stopSubmit("review-form", {
					login: "network connection error, please retry",
					user: "network connection error, please retry",
					review: "network connection error, please retry",
				})
			);
			yield put(reviewsErrorAction());
		}
	}
}
