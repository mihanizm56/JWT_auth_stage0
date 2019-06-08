import React, { Component } from "react";
import { connect } from "react-redux";
import { getLoginState } from "../../../redux/modules/auth";

class WrappedContainer extends Component {
	render() {
		const { children, loginState } = this.props;

		return React.Children.map(children, child => React.cloneElement(child, { loginState }));
	}
}

const mapStateToProps = store => {
	return {
		loginState: getLoginState(store),
	};
};

export const LoginStateProvider = connect(
	mapStateToProps,
	null
)(WrappedContainer);
