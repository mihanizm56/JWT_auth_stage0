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
