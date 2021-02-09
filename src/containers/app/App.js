import React from "react";
import Router from "../../routes";
import { connect } from "react-redux";
import { artistsRequest } from "../../actions/topCharts/topArtists";
import { tracksRequest } from "../../actions/topCharts/topTracks";
import getUserInfo from "../../actions/user"

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
		userIsFetching
	} = props;
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
			/>
		</div>
	);
}

const mapStateToProps = (store) => {
	return {
		artist: store.topArtists.artists,
		track: store.topTracks.tracks,
		artistsIsFetching: store.topArtists.artistsIsFetching,
		tracksIsFetching: store.topTracks.tracksIsFetching,
		userIsFetching: store.user.userInfoIsFetching,
		user: store.user.user
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setUserInfo: () => dispatch(getUserInfo()),
		setArtistsAction: () => dispatch(artistsRequest()),
		setTracksAction: () => dispatch(tracksRequest()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
