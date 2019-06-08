import React from "react";
import { Switch, Redirect } from "react-router-dom";
// import { ProfilePageRoute } from "./profile-page-route";

export const PrivateRoute = props => {
	const { loggedIn } = props;

	return !loggedIn ? (
		<Redirect to="/login" />
	) : (
		<Switch>
			{/* <ReviewsPageRoute exact path="/reviews" {...props} /> */}
			<Redirect to="/reviews" />
		</Switch>
	);
};
