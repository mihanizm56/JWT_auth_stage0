import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { addReviewAction } from "../../../redux/modules/reviews";

const sendReview = (payload, dispatch) => dispatch(addReviewAction(payload));

class WrappedContainer extends Component {
	componentDidMount() {
		// console.log("check ReviewsReduxFormProvider store props");
		// console.log(this.props);
	}

	render = () => {
		const { children } = this.props;

		return React.Children.map(children, child => React.cloneElement(child, { ...this.props }));
	};
}

export const ReviewsFormProvider = reduxForm({
	form: "review-form",
	onSubmit: sendReview,
})(WrappedContainer);
