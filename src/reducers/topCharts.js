import {
	GET_TOP_ARTISTS_REQUEST,
	GET_TOP_TRACKS_REQUEST,
} from "../actions/topCharts";
import {
	GET_TOP_ARTISTS_SUCCESS,
	GET_TOP_TRACKS_SUCCESS,
} from "../actions/topCharts";

const initialState = {
	artists: [],
	tracks: [],
};

export function topChartsReducer(state = initialState, action) {
	switch (action.type) {
		case GET_TOP_ARTISTS_REQUEST:
			return { ...state, artistsIsFetching: true };
		case GET_TOP_TRACKS_REQUEST:
			return { ...state, tracksIsFetching: true };
		case GET_TOP_ARTISTS_SUCCESS:
			return { ...state, artists: action.payload, artistsIsFetching: false };
		case GET_TOP_TRACKS_SUCCESS:
			return { ...state, tracks: action.payload, tracksIsFetching: false };
		default:
			return state;
	}
}
