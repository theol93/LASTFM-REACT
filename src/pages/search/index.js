import React, { useCallback, useEffect, useRef, useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";

export default function Search() {
	const useStyles = makeStyles((theme) => ({
		root: {
			"& > *": {
				marginTop: "64px",
				margin: theme.spacing(1),
				width: "500px",
			},
		},
		btn: {
			marginTop: "32px",
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

	function onButtonClick(type) {
		let text = inputEl.current.value;
		getUrl(text, type);
	}

	function getUrl(text, type) {
		const start = "http://ws.audioscrobbler.com/2.0/?method=";
		const apiKey = "&api_key=ae106d678c11a00457038f9cd9ad465d&format=json";
		const urlFull = start + type + text + apiKey;
		setUrl(urlFull);
	}

	const fetchMyAPI = useCallback(async () => {
		let response = await fetch(url);
		response = await response.json();
		setIsFetching(false);
		setData(response.results.trackmatches.track);
	}, [url]);

	useEffect(() => {
		if (url !== null) {
			fetchMyAPI();
		}
	}, [url, fetchMyAPI]);

	if (IsFetching === true) {
		return (
			<div>
				<Container component="main" maxWidth="sm" align="center">
					<form className={classes.root} noValidate autoComplete="on">
						<TextField
							id="outlined-secondary"
							variant="outlined"
							color="primary"
							placeholder="Введите строку для поиска в это поле"
							inputRef={inputEl}
						/>
					</form>
					<Button
						className={classes.btn}
						variant="contained"
						onClick={() => {
							onButtonClick("track.search&track=");
						}}
					>
						Song
					</Button>
				</Container>
			</div>
		);
	} else {
		return (
			<div>
				<Container component="main" maxWidth="sm" align="center">
					<form className={classes.root} noValidate autoComplete="on">
						<ul>
							{data.map((value, index) => {
								return (
									<li key={index}>
										Песня:{value.name} Исполнитель:{value.artist}
									</li>
								);
							})}
						</ul>
					</form>
				</Container>
				<Container component="main" maxWidth="sm" align="center">
					<Button
						className={classes.btn}
						variant="contained"
						onClick={() => {
							setIsFetching(true);
						}}
					>
						Back to SEARCH!
					</Button>
				</Container>
			</div>
		);
	}
}
