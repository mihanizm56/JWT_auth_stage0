import React, { Component } from "react";
import { connect } from "react-redux";
import { loginRequestAction, logoutAction, getLoginState } from "../../../redux/modules/auth";

class WrappedContainer extends Component {
	signInUser = ({ email, password }) => {
		if (email && password) {
			this.props.signIn(email, password);
		}
	};

	render() {
		return React.Children.map(this.props.children, child => React.cloneElement(child, { signInUser: this.signInUser }));
	}
}

const mapStateToProps = store => {
	return {
		loggedIn: getLoginState(store),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		signIn(email, password) {
			dispatch(loginRequestAction(email, password));
		},
	};
};

export const AuthLoginProvider = connect(
	mapStateToProps,
	mapDispatchToProps
)(WrappedContainer);
