import { createSelector } from "reselect";

const getReviewList = state => state.reviewsReducer.reviewList;
const getReviewModalState = state => state.reviewsReducer.modalReviewsOpen;
const getSendingLoading = state => state.reviewsReducer.sendingLoading;
const getSendingSuccess = state => state.reviewsReducer.sendingIsSuccess;
const getError = state => state.reviewsReducer.error;

export const reviewSelector = createSelector(
	[getReviewList],
	reviewList => reviewList
);

export const modalStateSelector = createSelector(
	[getReviewModalState],
	modalState => modalState
);

export const sendingRequestStateSelector = createSelector(
	[getSendingLoading],
	status => status
);

export const sendingSuccessSelector = createSelector(
	[getSendingSuccess],
	status => status
);

export const errorSelector = createSelector(
	[getError],
	error => error
);
