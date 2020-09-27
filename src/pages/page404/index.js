import React from "react";
import logo from "./page404.gif";
import styles from "./index.module.css";
import Container from "@material-ui/core/Container";

export default function () {
	return (
		<Container component="main" maxWidth="sm" align="center">
			<div className={styles.head}>Ошибка 404</div>

			<div className={styles.body}>
				<img src={logo} height={"400px"} alt={404} />
				<p>Запрашиваемой страницы, не существует!</p>
			</div>
		</Container>
	);
}
