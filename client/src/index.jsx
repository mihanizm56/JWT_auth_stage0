import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import throttle from "lodash/throttle";
import { createAppStore } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { App } from "./containers";
import { saveState, loadState } from "./utils";
import "./styles/main.css";
import "./styles/shared.css";
import "./assets/fonts/index.css";

const ROOT_ELEMENT = document.getElementById("root");

const persistedState = loadState();
const store = createAppStore(persistedState);

store.subscribe(
	throttle(() => {
		saveState({
			loginStorage: store.getState().loginStorage,
			сredentialsStorage: store.getState().сredentialsReduce,
		});
	}),
	1000
);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	ROOT_ELEMENT
);
