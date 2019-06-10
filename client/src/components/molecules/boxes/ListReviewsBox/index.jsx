import React, { PureComponent } from "react";
import { ReviewBox } from "..";
import isEqual from "lodash/isEqual";

export class ListReviewsBox extends PureComponent {
	static getDerivedStateFromProps(nextProps, prevState) {
		// if проверка массивов, да да!!
		const { reviews } = nextProps;

		if (reviews) {
			return { ...prevState, reviews };
		}

		return prevState;
	}

	state = {
		reviews: [],
		indexOfReview: 0,
	};

	componentDidMount() {
		console.log("ListReviewsBox mounted", this.props);
	}

	componentDidUpdate() {
		console.log("ListReviewsBox updated", this.props);
	}

	onNextClick = () => {
		// console.log("handle not default onNextClick");
		const { reviews, indexOfReview } = this.state;
		const lengthOfReviewList = reviews.length;

		if (indexOfReview < lengthOfReviewList - 1) {
			this.setState(prevState => ({ indexOfReview: prevState.indexOfReview + 1 }));
		}
	};

	onPrevClick = () => {
		// console.log("handle not default onPrevClick");
		const { indexOfReview } = this.state;

		if (indexOfReview) {
			this.setState(prevState => ({ indexOfReview: prevState.indexOfReview - 1 }));
		}
	};

	render() {
		const { reviews, indexOfReview } = this.state;
		const activeReview = reviews[indexOfReview] || {};
		const { review = "default review", user = "default user", login = "default login" } = activeReview;
		// const { openReviewsModal } = this.props;

		return (
			<ReviewBox
				review={review}
				user={user}
				login={login}
				onNextClick={this.onNextClick}
				onPrevClick={this.onPrevClick}
				// addReview={openReviewsModal}
			/>
		);
	}
}
