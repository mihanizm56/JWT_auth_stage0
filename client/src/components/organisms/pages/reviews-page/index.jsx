import React from "react";
import { ListReviewsBox } from "../../../molecules/boxes/ListReviewsBox";
import { ReviewsStoreProvider } from "../../../../containers";

export const ReviewsPage = props => {
	return (
		<div className="layout-page">
			<ReviewsStoreProvider>
				<ListReviewsBox />
			</ReviewsStoreProvider>
		</div>
	);
};
