import React, { Component } from "react";
import { reduxForm } from "redux-form";
// import { asyncValidateForLogin } from "../../../services/validation";
import { newUserRequestAction } from "../../../redux/modules/auth";

const submitLoginData = ({ email, password, user }, dispatch) =>
	dispatch(newUserRequestAction({ email, password, user }));

class WrappedContainer extends Component {
	normalizeText = value => value.replace(/^\s+/, "");

	render() {
		const { children, ...restProps } = this.props;

		return React.Children.map(children, child =>
			React.cloneElement(child, {
				normalizeText: this.normalizeText,
				...restProps,
			})
		);
	}
}

export const LoginFormProvider = reduxForm({
	form: "login",
	onSubmit: submitLoginData,
	// asyncValidate: asyncValidateForLogin,
	asyncBlurFields: ["email", "password", "user"],
})(WrappedContainer);
