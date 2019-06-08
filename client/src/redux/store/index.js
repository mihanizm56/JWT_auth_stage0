import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";
import { enableBatching } from "redux-batched-actions";
import { rootReducer } from "./root-reducer";

export const createAppStore = savedState => {
	const store = createStore(
		enableBatching(rootReducer),
		savedState,
		compose(
			applyMiddleware(thunk),
			window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
		)
	);

	return store;
};
