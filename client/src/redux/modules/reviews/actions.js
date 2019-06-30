import {
	ADD_THE_REVIEW,
	GET_REVIEWS,
	OPEN_MODAL_REVIEW,
	CLOSE_MODAL_REVIEW,
	SET_SENDING_STATE_LOADING,
	SET_SENDING_STATE_DONE,
	SET_SUCCESS_SENDING_STATE_DONE,
	RESET_SUCCESS_SENDING_STATE_DONE,
	REVIEWS_ERROR,
	SET_REVIEWS,
	PUT_THE_REVIEW,
} from "./constants";
import { errors } from "../../../constants";

export const addReviewAction = value => {
	return {
		type: ADD_THE_REVIEW,
		payload: value,
	};
};

export const putReviewAction = value => {
	return {
		type: PUT_THE_REVIEW,
		payload: value,
	};
};

export const setSendingStateLoading = () => {
	return {
		type: SET_SENDING_STATE_LOADING,
	};
};

export const setSendingStateDone = () => {
	return {
		type: SET_SENDING_STATE_DONE,
	};
};

export const setSendingStateSuccess = () => {
	return {
		type: SET_SUCCESS_SENDING_STATE_DONE,
	};
};

export const resetSendingStateSuccess = () => {
	return {
		type: RESET_SUCCESS_SENDING_STATE_DONE,
	};
};

export const getReviewsAction = data => ({
	type: SET_REVIEWS,
	payload: data,
});

export const reviewsErrorAction = error => {
	console.log("test reviewsErrorAction");
	return {
		type: REVIEWS_ERROR,
		error,
	};
};

export const fetchReviewsAction = () => {
	return {
		type: GET_REVIEWS,
	};
};
