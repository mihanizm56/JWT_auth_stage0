import React from "react";
import MediaQuery from "react-responsive";
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
			<MediaQuery minWidth={BIG_MEDIA_SIZE}>
				<div className="review__text-box">
					<ReviewTextBox review={review} user={user} login={login} />
				</div>
				<div className="review__buttons-wrapper">
					<Button onClick={addReview}> написать новый отзыв</Button>
					<ListButtonsBox onNextClick={onNextClick} onPrevClick={onPrevClick} />
				</div>
			</MediaQuery>
			<MediaQuery minWidth={MIDDLE_MEDIA_SIZE_FROM} maxWidth={MIDDLE_MEDIA_SIZE_TO}>
				<div className="review__text-box">
					<ReviewTextBox review={review} user={user} login={login} />
				</div>
				<div className="review__buttons-wrapper">
					<Button onClick={addReview}> написать новый отзыв</Button>
					<ListButtonsBox onNextClick={onNextClick} onPrevClick={onPrevClick} />
				</div>
			</MediaQuery>
			<MediaQuery minWidth={SMALL_MEDIA_SIZE_FROM} maxWidth={SMALL_MEDIA_SIZE_TO}>
				<div className="review__image"></div>
				<div className="review__text-box">
					<ReviewTextBox review={review} user={user} login={login} />
				</div>
				<div className="review__buttons-wrapper">
					<ListButtonsBox onNextClick={onNextClick} onPrevClick={onPrevClick} />
					<Button onClick={addReview}> написать новый отзыв</Button>
				</div>
			</MediaQuery>
		</div>
	);
};

ReviewBox.defaultProps = {
	login: "@misssssiskras",
	user: "Анастасия Красильникова",
	review:
		"Я молодая мама, но все равно фотографии не набирали и близко такого количества лайков, как у популярных инстамамочек. В отчаянии, я накупила аксессуаров и игрушек в Мишке и мои фотографии сразу стали более стильнее, а также набирают больше лайков!",

	onNextClick: () => console.log("onNextClick"),
	onPrevClick: () => console.log("onPrevClick"),
	addReview: () => console.log("addReview"),
};
