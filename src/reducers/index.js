import { combineReducers } from 'redux'
import { topArtists } from './topArtists'
import { topTracks } from './topTracks'
import { getUserInfo } from './userInfo'

export const rootReducer = combineReducers({
	topTracks: topTracks,
	topArtists: topArtists,
	user: getUserInfo,
})
