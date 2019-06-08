import React from "react";
import { Route, Redirect } from "react-router-dom";
import { LoginPage } from "../../../../components";

export const LoginPageRoute = ({ loggedIn }) =>
	loggedIn ? <Redirect to="/app" /> : <Route render={() => <LoginPage />} />;
