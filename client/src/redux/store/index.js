import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root-saga";
import { routerMiddleware } from "connected-react-router";
import { enableBatching } from "redux-batched-actions";
import { createBrowserHistory } from "history";
import { rootReducer } from "./root-reducer";

export const history = createBrowserHistory();

export const createAppStore = savedState => {
	const sagaMiddleware = createSagaMiddleware();

	const store = createStore(
		enableBatching(rootReducer(history)),
		savedState,
		compose(
			applyMiddleware(routerMiddleware(history), sagaMiddleware),
			window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
		)
	);

	sagaMiddleware.run(rootSaga);
	return store;
};
