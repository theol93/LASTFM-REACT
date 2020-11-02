import React from "react";
import Router from "../../routes";
import { connect } from "react-redux";
import { setArtists, setTracks } from "../../actions/topCharts";

function App() {
		return (
			<div>
				<Router />
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
		setArtists: (artists) => dispatch(setArtists(artists)), // [1]
		setTracks: (tracks) => dispatch(setTracks(tracks))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
