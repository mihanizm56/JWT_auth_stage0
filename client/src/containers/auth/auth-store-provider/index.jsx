import React, { Component } from "react";
import { connect } from "react-redux";
import { loginRequestAction, logoutAction, getLoginState } from "../../../redux/modules/auth";

class WrappedContainer extends Component {
	signOutUser = () => {
		this.props.signOut();
	};

	render() {
		const { children, signOut, loginState } = this.props;

		return React.Children.map(children, child =>
			React.cloneElement(child, { signOutUser: this.signOutUser, loginState })
		);
	}
}

const mapStateToProps = store => {
	return {
		loginState: getLoginState(store),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		signOut() {
			dispatch(logoutAction());
		},
	};
};

export const AuthStoreProvider = connect(
	mapStateToProps,
	mapDispatchToProps
)(WrappedContainer);
