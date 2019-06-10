import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import loginStorage from "../modules/auth";
import reviewsStorage from "../modules/reviews";

export const rootReducer = combineReducers({
	form: formReducer,
	loginStorage,
	reviewsStorage,
});
