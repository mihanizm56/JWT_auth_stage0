import React from "react";
import Button from "@material-ui/core/Button";
import noop from "lodash/noop";

export const UserButton = ({ loginState, signOutUser = noop }) => {
	return loginState ? (
		<Button color="primary" onClick={signOutUser}>
			Выйти
		</Button>
	) : null;
};
