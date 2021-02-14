import {
	GET_SAVED_TRACKS_REQUEST,
	GET_SAVED_TRACKS_SUCCESS,
} from '../actions/saved/savedTracks'

const initialState = {
	tracksSaved: [],
}

export function tracksSaved(state = initialState, action) {
	switch (action.type) {
		case GET_SAVED_TRACKS_REQUEST:
			return { ...state, tracksSavedIsFetching: true }
		case GET_SAVED_TRACKS_SUCCESS:
			return {
				...state,
				tracksSaved: action.payload,
				tracksSavedIsFetching: false,
			}
		default:
			return state
	}
}
