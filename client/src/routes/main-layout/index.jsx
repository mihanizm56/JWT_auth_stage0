import React from "react";
import { Switch } from "react-router-dom";
import { AuthPageRoute, LoginPageRoute } from "../page-route";
import { PrivateRoute } from "../page-route/private-routes";

export const MainLayout = ({ loginState }) => {
	return (
		<Switch>
			<AuthPageRoute exact path="/auth" loginState={loginState} />
			<LoginPageRoute exact path="/login" loginState={loginState} />
			<PrivateRoute loginState={loginState} />
		</Switch>
	);
};
