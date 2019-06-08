import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { ReviewsPageRoute } from "./reviews-page-route";

export const PrivateRoute = ({ loginState }) => {
	return !loginState ? (
		<Redirect to="/login" />
	) : (
		<Switch>
			<ReviewsPageRoute exact path="/reviews" />
			<Redirect to="/reviews" />
		</Switch>
	);
};
