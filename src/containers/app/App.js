import React from "react";
import Router from "../../routes";
import { connect } from "react-redux";
import { artistsRequest, tracksRequest } from "../../actions/topCharts";
import getUserInfo from "../../actions/user";

function App(props) {
	const {
		setArtistsAction,
		setTracksAction,
		artist,
		track,
		tracksIsFetching,
		artistsIsFetching,
		setUserInfo,
	} = props;
	return (
		<div>
			<Router
				setArtistsAction={setArtistsAction}
				setTracksAction={setTracksAction}
				setUserInfo={setUserInfo}
				artist={artist}
				track={track}
				tracksIsFetching={tracksIsFetching}
				artistsIsFetching={artistsIsFetching}
			/>
		</div>
	);
}

const mapStateToProps = (store) => {
	return {
		artist: store.top.artists,
		track: store.top.tracks,
		artistsIsFetching: store.top.artistsIsFetching,
		tracksIsFetching: store.top.tracksIsFetching,
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
