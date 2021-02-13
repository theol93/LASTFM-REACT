import {
	GET_SEARCH_ARTISTS_REQUEST,
	GET_SEARCH_ARTISTS_SUCCESS,
} from '../actions/search/searchArtists'

const initialState = {
	artistsSearch: []
}

export function searchArtists(state = initialState, action) {
	switch (action.type) {
		case GET_SEARCH_ARTISTS_REQUEST:
			return { ...state, artistsSearchIsFetching: true }
		case GET_SEARCH_ARTISTS_SUCCESS:
			return {
				...state,
				artistsSearch: action.payload,
				artistsSearchIsFetching: false,
			}
		default:
			return state
	}
}
