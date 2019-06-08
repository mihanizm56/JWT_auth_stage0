import React from "react";
import { Switch } from "react-router-dom";
import { LoginPageRoute } from "../page-route";
import { PrivateRoute } from "../page-route/private-routes";

export const MainLayout = props => {
	return (
		<Switch>
			<LoginPageRoute exact path="/login" {...props} />
			<PrivateRoute {...props} />
		</Switch>
	);
};
