import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";

export default function Scrobble() {
	const useStyles = makeStyles((theme) => ({
		root: {
			"& > *": {
				marginTop: "25px",
				margin: theme.spacing(1),
				width: "300px",
				maxwidth: "100%",
			},
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

	return (
		<Container component="main" align="center">
			<form className={classes.root} noValidate autoComplete="on">
				<TextField
					id="outlined-secondary"
					variant="outlined"
					color="primary"
					placeholder="Исполнитель"
				/>
				<TextField
					id="outlined-secondary"
					variant="outlined"
					color="primary"
					placeholder="Название песни"
				/>
			</form>
			<Button
				className={classes.btn}
				color="primary"
				variant="contained"
				onClick={() => {}}
			>
				СКРОБЛ
			</Button>
		</Container>
	);
}
