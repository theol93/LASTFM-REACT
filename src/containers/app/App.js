import React from "react";
import Router from "../../routes";
import { connect } from "react-redux";
import { artistsRequest, tracksRequest } from "../../actions/topCharts";

function App(props) {
	const {setArtistsAction, setTracksAction, artist, song} = props
		return (
			<div>
				<Router
					setArtistsAction={setArtistsAction}
					setTracksAction={setTracksAction}
					artist={artist}
					song={song}
				/>
			</div>
		);
}

const mapStateToProps = (store) => {
	return {
		artist: store.top.artists,
		song: store.top.tracks,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setArtistsAction: (artists) => dispatch(artistsRequest(artists)), // [1]
		setTracksAction: (tracks) => dispatch(tracksRequest(tracks))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
