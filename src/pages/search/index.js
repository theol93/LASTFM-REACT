import React, { useCallback, useEffect, useRef, useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import ImgMediaCard from "../cards/index";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

export default function Search() {
	const useStyles = makeStyles((theme) => ({
		grow: {
			flexGrow: 1,
		},
		root: {
			"& > *": {
				marginTop: "64px",
				margin: theme.spacing(1),
				width: "500px",
			},
		},
		paper: {
			marginTop: "15px",
			marginLeft: "5px",
			maxWidth: "20vw",
			height: "25vh",
			padding: theme.spacing(1),
			textAlign: "center",
			color: theme.palette.text.secondary,
			backgroundColor: "rgb(240,240,240)",
		},
		btn: {
			marginTop: "64px",
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
		let sortedByListeners;

		let response = await fetch(url);
		response = await response.json();
		setIsFetching(false);

		if (type === "track") {
			sortedByListeners = response.results.trackmatches.track;
			console.log(sortedByListeners);
		} else if (type === "artist") {
			sortedByListeners = response.results.artistmatches.artist;
			console.log(sortedByListeners);
		}
		sortedByListeners.sort((a, b) => a.listeners - b.listeners).reverse();
		setData(sortedByListeners);
	}, [url, type]);

	useEffect(() => {
		if (url !== null) {
			fetchMyAPI();
		}
	}, [url, fetchMyAPI]);

	if (IsFetching === true) {
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
			</Container>
		);
	} else {
		return (
			<div className={classes.grow}>
				<Grid container spacing={1}>
					{data.map((value, index) => {
						return (
							<Grid item xs={3} key={index}>
								<Paper className={classes.paper}>
									<ImgMediaCard
										url={value.url}
										mbid={value.mbid}
										listeners={value.listeners}
										title={value.name}
										subtitle={value.artist}
									/>
								</Paper>
							</Grid>
						);
					})}
				</Grid>

				<Container component="main" maxWidth="sm" align="center">
					<Button
						className={classes.btn}
						variant="contained"
						color="primary"
						onClick={() => {
							setIsFetching(true);
						}}
					>
						НАЗАД
					</Button>
				</Container>
			</div>
		);
	}
}
