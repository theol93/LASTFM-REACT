import React from "react";
import logo from "./page404.gif";
import styles from "./index.module.css";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

export default function () {
	return (
		<Container component="main" maxWidth="sm" align="center">
			<div className={styles.head}>
				Страница не найдена...
			</div>

			<div className={styles.body}>
				<img src={logo} height={"400px"} alt={404} />
			</div>

			<Button
				type="submit"
				fullWidth
				variant="contained"
				color="default"
				href={"/"}
			>
				Нажмите, чтобы вернуться на главную.
			</Button>
		</Container>
	);
}
