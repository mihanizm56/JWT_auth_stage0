import { createSelector } from "reselect";

const getReviewList = state => state.reviewsStorage.reviewList;
// const getReviewModalState = state => state.reviewsStorage.modalReviewsOpen;
// const getSendingLoading = state => state.reviewsStorage.sendingLoading;
// const getSendingSuccess = state => state.reviewsStorage.sendingIsSuccess;
// const getError = state => state.reviewsStorage.error;

export const reviewSelector = createSelector(
	[getReviewList],
	reviewList => reviewList
);

// export const modalStateSelector = createSelector(
// 	[getReviewModalState],
// 	modalState => modalState
// );

// export const sendingRequestStateSelector = createSelector(
// 	[getSendingLoading],
// 	status => status
// );

// export const sendingSuccessSelector = createSelector(
// 	[getSendingSuccess],
// 	status => status
// );

// export const errorSelector = createSelector(
// 	[getError],
// 	error => error
// );
