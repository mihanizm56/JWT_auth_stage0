import { LOGIN_STATE_SUCCESS, LOGIN_STATE_FAILED, LOGOUT } from "./constants";
import lensPath from "ramda/src/lensPath";
import set from "ramda/src/set";

const initState = {
	login: false,
};

const loginLens = lensPath(["login"]);

const loginStorage = (state = initState, action) => {
	switch (action.type) {
		case LOGIN_STATE_SUCCESS:
			return set(loginLens, true, state);
		case LOGIN_STATE_FAILED:
			return set(loginLens, false, state);
		case LOGOUT:
			return set(loginLens, false, state);

		default:
			return state;
	}
};

export default loginStorage;
