import {
	GET_TOP_TRACKS_REQUEST,
	GET_TOP_TRACKS_SUCCESS,
} from "../actions/topCharts/topTracks";

const initialState = {
	tracks: [],
};

export function topTracks(state = initialState, action) {
	switch (action.type) {
		case GET_TOP_TRACKS_REQUEST:
			return { ...state, tracksIsFetching: true };
		case GET_TOP_TRACKS_SUCCESS:
			return { ...state, tracks: action.payload, tracksIsFetching: false };
		default:
			return state;
	}
}
