import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthPage } from "../../../../components";

export const AuthPageRoute = ({ loginState }) =>
	loginState ? <Redirect to="/reviews" /> : <Route component={AuthPage} />;
