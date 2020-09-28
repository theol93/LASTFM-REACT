import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Saved from "../saved";

const useStyles = makeStyles({
	root: {
		width: "20vw",
		height: "20vh",
		backgroundColor: "rgb(245, 245, 245)",
	},
	size: {
	whiteSpace: 'nowrap', /* Отменяем перенос текста */
	overflow: 'hidden', /* Обрезаем содержимое */
	padding: "5px", /* Поля */
	textOverflow: 'ellipsis', /* Многоточие */
},
	sizeHover: {
	background: "#f0f0f0", /* Цвет фона */
	whiteSpace: "normal", /* Обычный перенос текста */
}
});

export default function ImgMediaCard(prop) {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea style={{ height: "15vh" }}>
				<CardContent>
					<Typography gutterBottom variant="h6" component="h2" className={classes.size}>
						{prop.title}
					</Typography>
					{prop.subtitle ? (
						<Typography variant="subtitle2" color="textSecondary" component="subtitle2">
							Исполнитель: {prop.subtitle}
						</Typography>
					) : (
						""
					)}
					<Typography variant="subtitle2" color="textSecondary" component="subtitle2">
						Слушателей: {prop.listeners}
					</Typography>
				</CardContent>
				<CardActions style={{ height: "5vh" }}>
					<Button
						size="small"
						color="primary"
						href={prop.url}
					>
						Ссылка на радио
					</Button>
					<Button
						onClick={() => {
							Saved.addSong();
						}}
						size="small"
						color="primary"
					>
						Добавить
					</Button>
				</CardActions>
			</CardActionArea>

		</Card>
	);
}
