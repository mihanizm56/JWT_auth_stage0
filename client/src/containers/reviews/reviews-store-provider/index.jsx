import React, { Component } from "react";
import { connect } from "react-redux";
import {
	addReviewAction,
	fetchReviewsAction,
	reviewSelector,
	sendingRequestStateSelector,
	sendingSuccessSelector,
	errorSelector,
} from "../../../redux/modules/reviews";

class WrappedContainer extends Component {
	static defaultProps = {
		addReviewInList: () => console.log("default addReviewInList"),
	};

	componentDidMount() {
		console.log("ReviewsStoreProvider mounted");
		console.log(this.props);

		this.props.fetchReviews();
	}

	componentDidUpdate() {
		console.log("ReviewsStoreProvider updated");
		// console.log(this.props);
	}

	render = () => {
		const { children, fetchReviews, ...restProps } = this.props;
		return React.Children.map(children, child => React.cloneElement(child, { ...restProps }));
	};
}

const mapStateToProps = store => {
	return {
		reviews: reviewSelector(store),
		// reviewIsSending: sendingRequestStateSelector(store),
		// sendingIsSuccess: sendingSuccessSelector(store),
		// errorReviews: errorSelector(store),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		addReviewInList(value) {
			dispatch(addReviewAction(value));
		},
		fetchReviews() {
			dispatch(fetchReviewsAction());
		},
	};
};

export const ReviewsStoreProvider = connect(
	mapStateToProps,
	mapDispatchToProps
)(WrappedContainer);
