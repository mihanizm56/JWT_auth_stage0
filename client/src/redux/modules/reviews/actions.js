import {
	ADD_THE_REVIEW,
	GET_REVIEWS,
	OPEN_MODAL_REVIEW,
	CLOSE_MODAL_REVIEW,
	SET_SENDING_STATE_LOADING,
	SET_SENDING_STATE_DONE,
	SET_SUCCESS_SENDING_STATE_DONE,
	RESET_SUCCESS_SENDING_STATE_DONE,
	ERROR,
} from "./constants";
import { errors } from "../../../constants";

export const addReviewAction = value => {
	return {
		type: ADD_THE_REVIEW,
		payload: value,
	};
};

export const openModalReviewAction = () => {
	return {
		type: OPEN_MODAL_REVIEW,
	};
};

export const closeModalReviewAction = () => {
	return {
		type: CLOSE_MODAL_REVIEW,
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
	type: GET_REVIEWS,
	payload: data,
});

export const contactsErrorAction = error => {
	console.log("test loginNetworkErrorAction");
	return {
		type: ERROR,
		error,
	};
};

export const fetchReviewsAction = () => {
	return {
		type: GET_REVIEWS,
	};
};
