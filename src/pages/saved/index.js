import React, { useCallback, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import Container from "@material-ui/core/Container";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Button from "@material-ui/core/Button";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		maxWidth: "65vw",
	},
	demo: {
		position: "center",
		backgroundColor: "rgb(245, 245, 245)",
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

export default function Saved() {
	const classes = useStyles();
	const [lovedSongs, setLovedSongs] = React.useState([]);
	const [lovedArtists, setLovedArtists] = React.useState([]);
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	function ListItemLink(props) {
		return <ListItem button component="a" {...props} />;
	}

	const getTracks = useCallback(() => {
		(async function () {
			let cleanupFunction = false;

			let urlSong =
				"http://ws.audioscrobbler.com/2.0/?method=user.getlovedtracks&user=" +
				localStorage.getItem("name") +
				"&api_key=e9fcdc63353cd735a0d4ae4cbf86ab6a&format=json";

			let urlArtist =
				"http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=" +
				localStorage.getItem("name") +
				"&api_key=e9fcdc63353cd735a0d4ae4cbf86ab6a&format=json";

			let responseTrack = await fetch(urlSong);
			responseTrack = await responseTrack.json();

			let responseArtist = await fetch(urlArtist);
			responseArtist = await responseArtist.json();

			if (!cleanupFunction) {
				setLovedSongs(responseTrack.lovedtracks.track);
				setLovedArtists(responseArtist.topartists.artist);
			}

			return () => (cleanupFunction = true);
		})();
	}, []);

	useEffect(() => {
		getTracks();
	}, [getTracks]);

	return (
		<>
			<Paper>
				<Tabs value={value} onChange={handleChange} centered>
					<Tab label={<h4>песни</h4>} />
					<Tab label={<h4>исполнители</h4>} />
				</Tabs>
			</Paper>
			{value === 0 ? (
				<Container align="center" className={classes.grow}>
					<Grid className={classes.root}>
						<Grid container spacing={3} justify="center" alignItems="center">
							<Grid item xs={12}>
								{lovedSongs.map((artist, i) => {
									return (
										<Paper key={i}>
											<div className={classes.demo}>
												<List>
													{
														<ListItem>
															<ListItemAvatar>
																<LibraryMusicIcon />
															</ListItemAvatar>
															<ListItemText
																primary={artist.name}
																secondary={artist.artist.name}
															/>
															<Button variant="contained">
																<ListItemLink
																	href={artist.url}
																	target={"_blank"}
																>
																	<PlayArrowIcon />
																</ListItemLink>
															</Button>
															<ListItemSecondaryAction>
																<IconButton
																	edge="end"
																	variant="contained"
																	aria-label="delete"
																>
																	<DeleteIcon />
																</IconButton>
															</ListItemSecondaryAction>
														</ListItem>
													}
												</List>
											</div>
										</Paper>
									);
								})}
							</Grid>
						</Grid>
					</Grid>
				</Container>
			) : (
				<Container align="center" className={classes.grow}>
					<Grid className={classes.root}>
						<Grid container spacing={3} justify="center" alignItems="center">
							<Grid item xs={12}>
								{lovedArtists.map((artist, i) => {
									return (
										<Paper key={i}>
											<div className={classes.demo}>
												<List>
													{
														<ListItem>
															<ListItemAvatar>
																<LibraryMusicIcon />
															</ListItemAvatar>
															<ListItemText primary={artist.name} />
															<Button variant="contained">
																<ListItemLink
																	href={artist.url}
																	target={"_blank"}
																>
																	<PlayArrowIcon />
																</ListItemLink>
															</Button>
															<ListItemSecondaryAction>
																<IconButton
																	edge="end"
																	variant="contained"
																	aria-label="delete"
																>
																	<DeleteIcon />
																</IconButton>
															</ListItemSecondaryAction>
														</ListItem>
													}
												</List>
											</div>
										</Paper>
									);
								})}
							</Grid>
						</Grid>
					</Grid>
				</Container>
			)}
		</>
	);
}
