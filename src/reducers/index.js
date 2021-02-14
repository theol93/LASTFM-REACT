import { combineReducers } from 'redux'
import { topArtists } from './topArtists'
import { topTracks } from './topTracks'
import { getUserInfo } from './userInfo'
import { searchArtists } from './searchArtists'
import { searchTracks } from './searchTracks'
import { tracksSaved } from './savedTracks'
import { artistsSaved } from './savedArtists'

export const rootReducer = combineReducers({
	topArtists: topArtists,
	topTracks: topTracks,
	artistsSearch: searchArtists,
	tracksSearch: searchTracks,
	artistsSaved: artistsSaved,
	tracksSaved: tracksSaved,
	user: getUserInfo,
})
