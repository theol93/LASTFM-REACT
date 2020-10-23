import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		margin: "10px",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%",
		marginTop: theme.spacing(1),
	},
}));

export default function User() {
	const classes = useStyles();
	return (
		<Container component="main" maxWidth="sm" align="center">
			<div className={classes.paper}>
				<Grid container className={classes.root} spacing={2}>
					<Grid item xs={12}>
						<Grid container justify="center">
							<Grid key={0} item className={classes.paper}>
								<Button
									type="submit"
									fullWidth
									variant="contained"
									color="primary"
									className={classes.submit}
									href={"/"}
									onClick={() => {
										localStorage.clear();
									}}
								>
									Выйти из аккаунта!
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</div>
		</Container>
	);
}
