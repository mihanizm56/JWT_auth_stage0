import { REFRESH_TOKEN } from "./constants";

export const refreshTokenAction = () => {
	return {
		type: REFRESH_TOKEN,
	};
};
