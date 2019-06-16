import React from "react";
import Button from "@material-ui/core/Button";
import { ReviewTextBox, ListButtonsBox } from "../";
import {
	BIG_MEDIA_SIZE,
	MIDDLE_MEDIA_SIZE_FROM,
	MIDDLE_MEDIA_SIZE_TO,
	SMALL_MEDIA_SIZE_FROM,
	SMALL_MEDIA_SIZE_TO,
} from "../../../../constants";
import "./review-box.css";

export const ReviewBox = props => {
	// console.log("ReviewBox props");
	// console.log(props);
	const { review, user, login, onNextClick, onPrevClick, addReview } = props;
	return (
		<div className="review-wrapper">
				<div className="review__text-box">
					<ReviewTextBox review={review} user={user} login={login} />
				</div>
				<div className="review__buttons-wrapper">
					<Button onClick={addReview}> написать новый отзыв</Button>
					<ListButtonsBox onNextClick={onNextClick} onPrevClick={onPrevClick} />
				</div>
		</div>
	);
};

ReviewBox.defaultProps = {
	onNextClick: () => console.log("onNextClick"),
	onPrevClick: () => console.log("onPrevClick"),
	addReview: () => console.log("addReview"),
};
