import React from "react";
import { Route, Redirect } from "react-router-dom";
import { LoginPage } from "../../../../components";

export const LoginPageRoute = ({ loginState }) =>
	loginState ? <Redirect to="/reviews" /> : <Route component={LoginPage} />;
