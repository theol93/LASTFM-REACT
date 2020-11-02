import { combineReducers } from 'redux'
import { topChartsReducer } from "./topCharts"

export const rootReducer = combineReducers({
  top: topChartsReducer,
})