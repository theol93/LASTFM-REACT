import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import TopTracks from "./topTracks";
import TopArtists from "./topArtists";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		maxWidth: "65vw",
		paddingTop: "15px",
	},
	demo: {
		position: "center",
		backgroundColor: "rgb(245, 245, 245)",
		border: "1px solid #DDD",
	},
	title: {
		margin: theme.spacing(4, 0, 2),
	},
	top: {
		marginTop: "20px",
	},
	grow: {
		marginTop: "10px",
		flexGrow: 1,
	},
}));

export default function TopCharts(props) {
	const classes = useStyles();
	const {
		setArtistsAction,
		setTracksAction,
		artist,
		track,
		tracksIsFetching,
		artistsIsFetching,
	} = props;


	return (
		<Container align="center" className={classes.grow}>
			<Grid className={classes.root}>
				<Grid container spacing={3}>
					<TopTracks
						tracksIsFetching={ tracksIsFetching}
						setTracksAction = {setTracksAction}
						track={track}
					/>
					<TopArtists
						artistsIsFetching = {artistsIsFetching}
						setArtistsAction = {setArtistsAction}
						artist = {artist}
					/>
				</Grid>
			</Grid>
		</Container>
	);
}
