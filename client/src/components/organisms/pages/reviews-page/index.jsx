import React from "react";
import { ListReviewsBox, ModalAddReview } from "../../../molecules";
import { ReviewsStoreProvider, ModalPortal, ReviewsFormProvider } from "../../../../containers";

export const ReviewsPage = props => {
	const { modalOpen } = props.match;
	console.log("prop ReviewsPage", props.match.params);
	return (
		<div className="layout-page">
			<ReviewsStoreProvider>
				<ListReviewsBox />
			</ReviewsStoreProvider>
			{modalOpen && (
				<ModalPortal>
					<ReviewsFormProvider>
						<ModalAddReview />
					</ReviewsFormProvider>
				</ModalPortal>
			)}
		</div>
	);
};
