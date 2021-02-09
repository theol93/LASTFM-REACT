import { combineReducers } from "redux";
import { topChartsReducer } from "./topCharts";
import { getUserInfo } from "./userInfo"

export const rootReducer = combineReducers({
	top: topChartsReducer,
	user: getUserInfo
});
