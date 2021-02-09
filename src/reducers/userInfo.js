import { GET_USER_INFO_REQUEST } from '../actions/user/index'
import { GET_USER_INFO_SUCCESS } from '../actions/user/index'

const initialState = {
	user: [],
}

export function getUserInfo(state = initialState, action) {
	switch (action.type) {
		case GET_USER_INFO_REQUEST:
			return { ...state, userInfoIsFetching: true }
		case GET_USER_INFO_SUCCESS:
			return { ...state, user: action.payload, userInfoIsFetching: false }
		default:
			return state
	}
}
