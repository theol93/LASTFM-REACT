import {
	GET_SEARCH_TRACKS_REQUEST,
	GET_SEARCH_TRACKS_SUCCESS,
} from '../actions/search/searchTracks'

const initialState = {
	tracksSearch: []
}

export function searchTracks(state = initialState, action) {
	switch (action.type) {
		case GET_SEARCH_TRACKS_REQUEST:
			return { ...state, tracksSearchIsFetching: true }
		case GET_SEARCH_TRACKS_SUCCESS:
			return {
				...state,
				tracksSearch: action.payload,
				tracksSearchIsFetching: false,
			}
		default:
			return state
	}
}
