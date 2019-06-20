import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { connectRouter } from "connected-react-router";
import loginStorage from "../modules/auth";
import reviewsStorage from "../modules/reviews";

export const rootReducer = history =>
	combineReducers({
		router: connectRouter(history),
		form: formReducer,
		loginStorage,
		reviewsStorage,
	});
