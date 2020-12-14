import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Container from "@material-ui/core/Container";

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

	let setArtistsAction = props.setArtistsAction;
	let setTracksAction = props.setTracksAction;

	useEffect(() => {
		setTracksAction();
		setArtistsAction();
	}, [setArtistsAction, setTracksAction]);

	function ListItemLink(props) {
		return <ListItem button component="a" {...props} />;
	}

	return (
		<Container align="center" className={classes.grow}>
			<Grid className={classes.root}>
				<Grid container spacing={3}>
					{props.tracksIsFetching === false ? (
						<Grid item xs={6} className={classes.root}>
							<h4>ТОП 10 ПЕСЕН</h4>
							{props.track.map((track, i) => {
								return (
									<Paper key={i}>
										<div className={classes.demo}>
											<List>
												{
													<ListItem>
														<ListItemAvatar>
															<h2>{++i}</h2>
														</ListItemAvatar>
														<ListItemText
															primary={track.name}
															secondary={track.artist.name}
														/>
														<ListItemSecondaryAction>
															<Button variant="contained">
																<ListItemLink
																	href={track.url}
																	target={"_blank"}
																>
																	<PlayArrowIcon />
																</ListItemLink>
															</Button>
														</ListItemSecondaryAction>
													</ListItem>
												}
											</List>
										</div>
									</Paper>
								);
							})}
						</Grid>
					) : (
						""
					)}

					{props.artistsIsFetching === false ? (
						<Grid item xs={6} className={classes.root}>
							<h4>ТОП 10 ИСПОЛНИТЕЛЕЙ</h4>
							{props.artist.map((artist, i) => {
								return (
									<Paper key={i}>
										<div className={classes.demo}>
											<List>
												{
													<ListItem>
														<ListItemAvatar>
															<h2>{++i}</h2>
														</ListItemAvatar>
														<ListItemText primary={artist.name} />
														<ListItemSecondaryAction>
															<Button variant="contained">
																<ListItemLink
																	href={artist.url}
																	target={"_blank"}
																>
																	<PlayArrowIcon />
																</ListItemLink>
															</Button>
														</ListItemSecondaryAction>
													</ListItem>
												}
											</List>
										</div>
									</Paper>
								);
							})}
						</Grid>
					) : (
						""
					)}
				</Grid>
			</Grid>
		</Container>
	);
}
