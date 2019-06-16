import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { ReviewsPageRoute } from "./reviews-page-route";

export const PrivateRoute = ({ loginState }) => {
	return !loginState ? (
		<Redirect to="/auth" />
	) : (
		<Switch>
			<ReviewsPageRoute path="/reviews/:modalOpen" />
		</Switch>
	);
};
