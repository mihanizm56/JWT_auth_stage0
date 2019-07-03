// import {
//     addReviewAction,
//     openModalReviewAction,
//     closeModalReviewAction,
//     setSendingStateLoading,
//     setSendingStateDone,
//     setSendingStateSuccess,
//     resetSendingStateSuccess,
//     getReviewsAction,
//     contactsNetworkErrorAction
// } from './actions';
// import { sleep, fetchPostRequest, fetchGetRequest } from '../../../services';
// import { loadingAppAction, loadingAppDoneAction } from '../appLoading';

// const DEFAULT_REVIEWS = [
//     {
//         text: 'Нет данных',
//         user: 'Нет данных',
//         login: 'Нет данных'
//     }
// ];

// export const fetchReviewsAction = () => dispatch => {
//     dispatch(loadingAppAction());
//     fetchGetRequest('api/reviews')
//         .then(data => data.json())
//         .then(data => dispatch(getReviewsAction(data.reviews)))
//         .then(dispatch(loadingAppDoneAction()))
//         .catch(error => console.warn(error) || dispatch(getReviewsAction(DEFAULT_REVIEWS)));
// };

// export const addReviewRequestAction = value => {
//     console.log('check addReviewRequestAction, value', value);

//     if (value) {
//         return dispatch => {
//             dispatch(setSendingStateLoading());

//             return fetchPostRequest('api/reviews', value)
//                 .then(data => data.json())
//                 .then(data => console.log('done', data) || data)
//                 .then(data => sleep(data))
//                 .then(data => dispatch(addReviewAction(data.reviews)))
//                 .then(() => dispatch(setSendingStateSuccess()))
//                 .then(() => dispatch(setSendingStateDone()))
//                 .then(() => {
//                     setTimeout(() => {
//                         dispatch(closeModalReviewAction());
//                         dispatch(resetSendingStateSuccess());
//                     }, 2000);
//                 })
//                 .catch(error => {
//                     dispatch(contactsNetworkErrorAction()); // ///надо проверить а сервер ли даёт ошибку
//                     dispatch(setSendingStateDone());
//                 });
//         };
//     }
// };

import { call, put } from "redux-saga/effects";
import { push } from "connected-react-router";
import { setSubmitFailed } from "redux-form";
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
		alert("error", error); /////TODO remove and make good enough error description
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
		} else if (error) {
			//alert("error", error); /////TODO remove and make good enough error description
			// yield put(setSubmitFailed("review-form", { login: "test error" }));
			yield put(reviewsErrorAction());
		}
	} catch (error) {
		alert("error", error); /////TODO remove and make good enough error description
		yield put(reviewsErrorAction());
	}
}
