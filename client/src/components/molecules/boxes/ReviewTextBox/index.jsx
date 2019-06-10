import React, { memo } from "react";

import { OpenSansText, VerdanaText } from "../../../atoms";
import "./ReviewTextBox.css";

const MAX_REVIEW_TEXT_LENGTH = 180;

const sliceReview = text => {
	const textLength = text.length;

	if (textLength > MAX_REVIEW_TEXT_LENGTH) return `${text.slice(0, MAX_REVIEW_TEXT_LENGTH)}...`;

	return text;
};

export const ReviewTextBox = memo(({ review, user, login }) => {
	return (
		<div className="review-text-box-wrapper">
			<div className="review-text-box__main-title">
				<VerdanaText text="Отзывы" classname="main-title" bold />
			</div>
			<div className="review-text-box__text">
				<OpenSansText classname="open-sans-text" text={sliceReview(review)} />
			</div>
			<div className="review-text__login-wrapper">
				{/* {getAuthorName(name, surname)} */}
				<VerdanaText text={user} classname="review-text-value" bold />
				<OpenSansText classname="review-login-text" text={login} ligth />
			</div>
		</div>
	);
});

ReviewTextBox.defaultProps = {
	review: "default-review-text",
	name: "default-firtsname",
	login: "default-login",
};
