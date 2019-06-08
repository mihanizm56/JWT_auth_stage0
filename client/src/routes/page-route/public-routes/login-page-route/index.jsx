import React from "react";
import { Route, Redirect } from "react-router-dom";
import { LoginPage } from "../../../../components";

export const LoginPageRoute = props => {
	const { loggedIn } = props;

	return loggedIn ? <Redirect to="/app" /> : <Route render={() => <LoginPage {...props} />} />;
};
