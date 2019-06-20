import {
	PUT_THE_REVIEW,
	GET_REVIEWS,
	OPEN_MODAL_REVIEW,
	CLOSE_MODAL_REVIEW,
	SET_SENDING_STATE_LOADING,
	SET_SENDING_STATE_DONE,
	SET_SUCCESS_SENDING_STATE_DONE,
	RESET_SUCCESS_SENDING_STATE_DONE,
	SET_REVIEWS,
} from "./constants";

import { errors } from "../../../constants";

const initialState = {
	reviewList: [],
	modalReviewsOpen: false,
	sendingLoading: false,
	sendingIsSuccess: null,
	error: null,
};

const reviewsStorage = (state = initialState, action) => {
	switch (action.type) {
		case PUT_THE_REVIEW:
			return { ...state, reviewList: [...state.reviewList, action.payload] };
		case OPEN_MODAL_REVIEW:
			return { ...state, modalReviewsOpen: true };
		case CLOSE_MODAL_REVIEW:
			return { ...state, modalReviewsOpen: false };
		// case SET_SENDING_STATE_LOADING:
		// 	return { ...state, sendingLoading: true };
		// case SET_SENDING_STATE_DONE:
		// 	return { ...state, sendingLoading: false };
		// case RESET_SUCCESS_SENDING_STATE_DONE:
		// 	return { ...state, sendingIsSuccess: null };
		// case SET_SUCCESS_SENDING_STATE_DONE:
		// 	return { ...state, sendingIsSuccess: true };
		case SET_REVIEWS:
			return { ...state, reviewList: action.payload };
		// case NETWORK_ERROR:
		// 	return { ...state, error: errors.NETWORK_ERROR };

		default:
			return state;
	}
};

export default reviewsStorage;
