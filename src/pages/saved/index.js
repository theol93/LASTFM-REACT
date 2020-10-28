import React, { useCallback, useEffect, useState } from "react";
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
import md5 from "md5";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		maxWidth: "65vw",
		paddingTop: "15px"
	},
	demo: {
		position: "center",
		backgroundColor: "rgb(245, 245, 245)",
		border: "1px solid #DDD"
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
	const [lovedSongs, setLovedSongs] = useState([]);
	const [lovedArtists, setLovedArtists] = useState([]);
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	function ListItemLink(props) {
		return <ListItem button component="a" {...props} />;
	}

	function getApiSignature(params) {
		let keys = Object.keys(params);
		let string = "";

		keys.sort();
		keys.forEach(function (key) {
			string += key + params[key];
		});

		string += "72f025ee47b0cc1d710967db9d1a6202";
		console.log("str: ", string);
		/* Needs lastfm.api.md5.js. */
		return md5(string);
	}

	async function trackUnlove(e, track, artist) {
		let params = {};

		let url = "http://ws.audioscrobbler.com/2.0/?method=track.unlove";
		let track_url = "&track=" + encodeURI(track);
		let artist_url = "&artist=" + encodeURI(artist);
		let sk = "&sk=" + localStorage.getItem("key");
		let api_key = "&api_key=e9fcdc63353cd735a0d4ae4cbf86ab6a";

		params.method = "track.unlove";
		params.api_key = "e9fcdc63353cd735a0d4ae4cbf86ab6a";
		params.sk = localStorage.getItem("key");
		params.track = track;
		params.artist = artist;

		let api_sig = getApiSignature(params);
		let api_sigStr = "&api_sig=" + api_sig;
		let urlFull =
			url + track_url + artist_url + api_key + api_sigStr + sk + "&format=json";
		console.log("URL:", api_sig);

		await fetch(urlFull, { method: "POST" });
		window.location.reload();
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
																	onClick={(e) =>
																		trackUnlove(
																			e,
																			artist.name,
																			artist.artist.name
																		)
																	}
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
						</Grid>
					</Grid>
				</Container>
			)}
		</>
	);
}
