import React, { Component } from "react";
import { reduxForm } from "redux-form";

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
})(WrappedContainer);
