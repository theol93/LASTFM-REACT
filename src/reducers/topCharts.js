import { SET_TOP_ARTISTS } from "../actions/topCharts";
import { SET_TOP_TRACKS } from "../actions/topCharts";

const initialState = {
  artists: ["art"],
  tracks: ["tra"]
}

export function topChartsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TOP_ARTISTS:
      return { ...state, artists: action.payload }
    case SET_TOP_TRACKS:
      return { ...state, tracks: action.payload }
    default:
      return state
  }
}