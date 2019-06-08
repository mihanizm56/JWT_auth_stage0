import React from "react";
import { Switch } from "react-router-dom";
import { LoginPageRoute } from "../page-route";
import { PrivateRoute } from "../page-route/private-routes";

export const MainLayout = () => {
	return (
		<Switch>
			{/* <PublicRoute exact path="/login" /> */}
			<LoginPageRoute exact path="/login" />
			{/* <PrivateRoute /> */}
		</Switch>
	);
};
