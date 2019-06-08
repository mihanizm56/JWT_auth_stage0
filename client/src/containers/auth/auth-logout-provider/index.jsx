import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutAction } from "../../../redux/modules/auth";

class WrappedContainer extends Component {
	signOutUser = () => {
		this.props.signOut();
	};

	render() {
		return React.Children.map(this.props.children, child =>
			React.cloneElement(child, { signOutUser: this.signOutUsers })
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		signOut() {
			dispatch(logoutAction());
		},
	};
};

export const LogoutProvider = connect(
	null,
	mapDispatchToProps
)(WrappedContainer);
