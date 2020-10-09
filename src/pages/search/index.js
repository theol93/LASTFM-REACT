import React, { useCallback, useEffect, useRef, useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import AlbumIcon from "@material-ui/icons/Album";

export default function Search() {
	const useStyles = makeStyles((theme) => ({
		grow: {
			flexGrow: 1,
			width: "65vw",
		},
		demo: {
			position: "center",
			backgroundColor: "rgb(245, 245, 245)",
		},
		root: {
			"& > *": {
				marginTop: "25px",
				margin: theme.spacing(1),
				width: "500px",
			},
		},
		paper: {
			color: theme.palette.text.secondary,
			backgroundColor: "rgb(240,240,240)",
		},
		btn: {
			marginTop: "25px",
			border: 0,
			marginLeft: "15px",
			borderRadius: 13,
			height: 54,
			padding: "0 80px",
			width: 100,
		},
	}));

	const classes = useStyles();
	const inputEl = useRef(null);
	const [IsFetching, setIsFetching] = useState(true);
	const [data, setData] = useState([]);
	const [url, setUrl] = useState(null);
	const [type, setType] = useState("");

	function ListItemLink(props) {
		return <ListItem button component="a" {...props} />;
	}

	function onButtonClick(type) {
		let typeCode = "";

		if (type === "artist") {
			setType("artist");
			typeCode = "artist.search&artist=";
		} else if (type === "track") {
			setType("track");
			typeCode = "track.search&track=";
		} else {
			return null;
		}
		let text = inputEl.current.value;
		if (text !== "") {
			getUrl(text, typeCode);
		}
	}

	function getUrl(text, type) {
		const start = "http://ws.audioscrobbler.com/2.0/?method=";
		const apiKey = "&api_key=ae106d678c11a00457038f9cd9ad465d&format=json";
		const urlFull = start + type + text + apiKey;
		setUrl(urlFull);
	}

	const fetchMyAPI = useCallback(async () => {
		let cleanupFunction = false;
		let sortedByListeners;

		let response = await fetch(url);
		response = await response.json();

		if (!cleanupFunction) {
			setIsFetching(false);
			if (type === "track") {
				sortedByListeners = response.results.trackmatches.track;
			} else if (type === "artist") {
				sortedByListeners = response.results.artistmatches.artist;
			}
			sortedByListeners.sort((a, b) => a.listeners - b.listeners).reverse();
			setData(sortedByListeners);
		}

		return () => (cleanupFunction = true);
	}, [url, type]);

	useEffect(() => {
		if (url !== null) {
			fetchMyAPI();
		}
	}, [url, fetchMyAPI]);

	return (
		<Container component="main" align="center">
			<form className={classes.root} noValidate autoComplete="on">
				<TextField
					id="outlined-secondary"
					variant="outlined"
					color="primary"
					placeholder="Введите строку для поиска в это поле"
					inputRef={inputEl}
				/>
				<Button
					className={classes.btn}
					color="primary"
					variant="contained"
					onClick={() => {
						onButtonClick("track");
					}}
				>
					ПЕСНЯ
				</Button>
				<Button
					className={classes.btn}
					color="primary"
					variant="contained"
					onClick={() => {
						onButtonClick("artist");
					}}
				>
					АВТОР
				</Button>
			</form>

			{IsFetching !== true ? (
				<Container align="center" className={classes.grow}>
					{data.map((value, index) => {
						return (
							<Paper key={index}>
								<div className={classes.demo}>
									<List>
										{
											<ListItem>
												<ListItemAvatar>
													<AlbumIcon />
												</ListItemAvatar>
												<ListItemText
													primary={value.name}
													secondary={value.artist}
												/>
												<Button variant="contained">
													<ListItemLink href={value.url} target={"_blank"}>
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
				</Container>
			) : (
				""
			)}
		</Container>
	);
}
