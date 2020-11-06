import React from "react";
import App from "./containers/app/App";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
