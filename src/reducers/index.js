import { combineReducers } from 'redux'
import { topArtists } from './topArtists'
import { topTracks } from './topTracks'
import { getUserInfo } from './userInfo'
import { searchArtists } from './searchArtists'
import { searchTracks } from './searchTracks'

export const rootReducer = combineReducers({
	topTracks: topTracks,
	topArtists: topArtists,
	user: getUserInfo,
	artistsSearch: searchArtists,
	tracksSearch: searchTracks,
})
