import React from "react";
import Router from "../../routes";
import { connect } from "react-redux";
import { artistsRequest, tracksRequest } from "../../actions/topCharts";

function App(props) {
	const {
		setArtistsAction,
		setTracksAction,
		artist,
		track,
		tracksIsFetching,
		artistsIsFetching,
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
		setArtistsAction: (artists) => dispatch(artistsRequest(artists)), // [1]
		setTracksAction: (tracks) => dispatch(tracksRequest(tracks)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
