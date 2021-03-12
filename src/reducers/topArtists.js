import {
	GET_TOP_ARTISTS_REQUEST,
	GET_TOP_ARTISTS_SUCCESS,
} from '../actions/topCharts/topArtists'

const initialState = {
	artists: [],
}

export function topArtists(state = initialState, action) {
	switch (action.type) {
		case GET_TOP_ARTISTS_REQUEST:
			return { ...state, artistsIsFetching: true }
		case GET_TOP_ARTISTS_SUCCESS:
			return {
				...state,
				artists: action.payload,
				artistsIsFetching: false,
			}
		default:
			return state
	}
}
