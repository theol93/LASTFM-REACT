import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		marginTop: "10px",
		padding: theme.spacing(1),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
}));

export default function Saved(prop) {
	const classes = useStyles();

	let savedSongs = [1, 2, 3];

	return (
		<Grid className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={6}>
					<Paper className={classes.paper}>
						<h2>Song items</h2>
						{savedSongs.map((nums, i) => {
							return <div key={i}>{nums}</div>;
						})}
					</Paper>
				</Grid>
				<Grid item xs={6}>
					<Paper className={classes.paper}>
						<h2>Artist items</h2>
					</Paper>
				</Grid>
			</Grid>
		</Grid>
	);
}
