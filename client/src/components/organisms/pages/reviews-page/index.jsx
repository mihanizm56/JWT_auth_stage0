import React from "react";
import { ListReviewsBox, ModalAddReview } from "../../../molecules";
import { ReviewsStoreProvider, ModalPortal, ReviewsFormProvider } from "../../../../containers";

export const ReviewsPage = props => {
	const {
		match: {
			params: { modalOpen },
			url,
		},
	} = props;
	const modalIsOpened = modalOpen === "add";
	console.log("props ReviewsPage", props.match);
	return (
		<div className="layout-page">
			<ReviewsStoreProvider>
				<ListReviewsBox fullUrl={url} />
			</ReviewsStoreProvider>
			{modalIsOpened && (
				<ModalPortal>
					<ReviewsFormProvider>
						<ModalAddReview fullUrl={url} />
					</ReviewsFormProvider>
				</ModalPortal>
			)}
		</div>
	);
};
