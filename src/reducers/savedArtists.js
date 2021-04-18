import {
	GET_SAVED_ARTISTS_REQUEST,
	GET_SAVED_ARTISTS_SUCCESS,
} from '../actions/saved/savedArtists'

const initialState = {
	artistsSaved: [],
}

export function artistsSaved(state = initialState, action) {
	switch (action.type) {
		case GET_SAVED_ARTISTS_REQUEST:
			return { ...state, artistsSavedIsFetching: true }
		case GET_SAVED_ARTISTS_SUCCESS:
			return {
				...state,
				artistsSaved: action.payload,
				artistsSavedIsFetching: false,
			}
		default:
			return state
	}
}
