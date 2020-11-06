import { GET_TOP_ARTISTS_REQUEST, GET_TOP_TRACKS_REQUEST } from "../actions/topCharts";
import { GET_TOP_ARTISTS_SUCCESS, GET_TOP_TRACKS_SUCCESS} from "../actions/topCharts"

const initialState = {
  artists: [],
  tracks: [],
  isFetching: false
}

export function topChartsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TOP_ARTISTS_REQUEST:
      return { ...state, artists: action.payload,
        isFetching: true }
    case GET_TOP_TRACKS_REQUEST:
      return { ...state, tracks: action.payload,
        isFetching: true }
    case GET_TOP_ARTISTS_SUCCESS:
      return { ...state, artists: action.payload,
        isFetching: false }
    case GET_TOP_TRACKS_SUCCESS:
      return { ...state, tracks: action.payload,
        isFetching: false }
    default:
      return state
  }
}