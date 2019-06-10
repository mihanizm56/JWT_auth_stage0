import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { asyncValidateForAuth } from "../../../services/validation";
import { loginRequestAction } from "../../../redux/modules/auth";

const submitAuthData = ({ login, password }, dispatch) => dispatch(loginRequestAction({ login, password }));

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

export const AuthFormProvider = reduxForm({
	form: "auth",
	onSubmit: submitAuthData,
	// asyncValidate: asyncValidateForAuth,
	asyncBlurFields: ["login", "password"],
})(WrappedContainer);
