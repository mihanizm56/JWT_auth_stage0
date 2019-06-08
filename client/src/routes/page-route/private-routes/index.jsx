import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { IndexPageRoute } from "./index-page-route";
import { ProfilePageRoute } from "./profile-page-route";

export const PrivateRoute = props => {
	const { loggedIn } = props;

	return !loggedIn ? (
		<Redirect to="/login" />
	) : (
		<Switch>
			<IndexPageRoute exact path="/" {...props} />
			<IndexPageRoute exact path="/map" {...props} />
			<ProfilePageRoute exact path="/profile" {...props} />
			<Redirect to="/map" />
		</Switch>
	);
};
