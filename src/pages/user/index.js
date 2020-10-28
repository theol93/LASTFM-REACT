import React, { useCallback, useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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
	table: {
		minWidth: 650,
	},
}));

export default function User() {
	const classes = useStyles();
	const [user, setUser] = useState([]);

	const getInfo = useCallback(() => {
		(async function () {
			let cleanupFunction = false;
			let name = localStorage.getItem("name");
			let url =
				"http://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=" +
				name +
				"&api_key=e9fcdc63353cd735a0d4ae4cbf86ab6a&format=json";

			let response = await fetch(url);
			response = await response.json();

			if (!cleanupFunction) {
				setUser(response.user);
			}
			return () => (cleanupFunction = true);
		})();
	}, []);

	useEffect(() => {
		getInfo();
	}, [getInfo]);

	return (
		<Container component="main" maxWidth="sm" align="center">
			<div className={classes.paper}>
				<Grid container className={classes.root} spacing={2}>
					<Grid item xs={12}>
						<Grid container justify="center">
							<Grid key={0} item className={classes.paper}>
								<TableContainer component={Paper}>
									<Table className={classes.table} aria-label="simple table">
										<TableHead>
											<TableRow>
												<TableCell>Пользователь</TableCell>
												<TableCell align="center">Возраст</TableCell>
												<TableCell align="center">Имя</TableCell>
												<TableCell align="center">Пол</TableCell>
												<TableCell align="center">Страна</TableCell>
												<TableCell align="center">Ссылка</TableCell>
												<TableCell align="center">Подписчиков</TableCell>
												<TableCell align="center">Прослушиваний</TableCell>
												<TableCell align="center">Плейлистов</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											<TableRow key={user.name}>
												<TableCell component="th" scope="row" align="center">
													{user.name}
												</TableCell>
												<TableCell align="center">{user.age}</TableCell>
												<TableCell align="center">{user.realname}</TableCell>
												<TableCell align="center">{user.gender}</TableCell>
												<TableCell align="center">{user.country}</TableCell>
												<TableCell align="center"><a href={user.url} target={"blank"}>Link</a></TableCell>
												<TableCell align="center">{user.subscribers}</TableCell>
												<TableCell align="center">{user.playcount}</TableCell>
												<TableCell align="center">{user.playlists}</TableCell>
											</TableRow>
										</TableBody>
									</Table>
								</TableContainer>
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
