import React from 'react'
import Router from '../../routes'
import { connect } from 'react-redux'
import { artistsRequest } from '../../actions/topCharts/topArtists'
import { tracksRequest } from '../../actions/topCharts/topTracks'
import getUserInfo from '../../actions/user'
import { searchArtists } from '../../actions/search/searchArtists'
import { searchTracks } from '../../actions/search/searchTracks'

function App(props) {
	const {
		setArtistsAction,
		setTracksAction,
		artist,
		track,
		tracksIsFetching,
		artistsIsFetching,
		setUserInfo,
		user,
		userIsFetching,
		artistsSearch,
		artistsSearchIsFetching,
		setSearchArtists,
		tracksSearch,
		tracksSearchIsFetching,
		setSearchTracks,
	} = props
	return (
		<div>
			<Router
				setArtistsAction={setArtistsAction}
				setTracksAction={setTracksAction}
				artist={artist}
				track={track}
				tracksIsFetching={tracksIsFetching}
				artistsIsFetching={artistsIsFetching}
				setUserInfo={setUserInfo}
				user={user}
				userIsFetching={userIsFetching}
				artistsSearch={artistsSearch}
				artistsSearchIsFetching={artistsSearchIsFetching}
				setSearchArtists={setSearchArtists}
				tracksSearch={tracksSearch}
				tracksSearchIsFetching={tracksSearchIsFetching}
				setSearchTracks={setSearchTracks}
			/>
		</div>
	)
}

const mapStateToProps = (store) => {
	return {
		artist: store.topArtists.artists,
		track: store.topTracks.tracks,
		artistsIsFetching: store.topArtists.artistsIsFetching,
		tracksIsFetching: store.topTracks.tracksIsFetching,
		userIsFetching: store.user.userInfoIsFetching,
		user: store.user.user,
		artistsSearch: store.artistsSearch.artistsSearch,
		artistsSearchIsFetching: store.artistsSearch.artistsSearchIsFetching,
		tracksSearch: store.tracksSearch.tracksSearch,
		tracksSearchIsFetching: store.tracksSearch.tracksSearchIsFetching,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setUserInfo: () => dispatch(getUserInfo()),
		setArtistsAction: () => dispatch(artistsRequest()),
		setTracksAction: () => dispatch(tracksRequest()),
		setSearchArtists: (url) => dispatch(searchArtists(url)),
		setSearchTracks: (url) => dispatch(searchTracks(url)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
