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
		maxWidth: "300px",
		width: "300px",
		height: "250px",
		backgroundColor: "rgb(245, 245, 245)",
	},
});

export default function ImgMediaCard(prop) {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea style={{ height: "200px" }}>
				<CardContent>
					<Typography gutterBottom variant="h6" component="h2">
						{prop.title}
					</Typography>
					{prop.subtitle ? (
						<Typography variant="h6" color="textSecondary" component="h2">
							Исполнитель: {prop.subtitle}
						</Typography>
					) : (
						""
					)}
					<Typography variant="h6" color="textSecondary" component="h2">
						Слушателей: {prop.listeners}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions style={{ height: "50px" }}>
				<Button
					size="small"
					color="primary"
					href={prop.url}
					style={{
						marginLeft: "auto",
					}}
				>
					Ссылка на радио
				</Button>
				<Button
					onClick={() => {
						Saved.addSong();
					}}
					size="small"
					color="primary"
					style={{
						marginRight: "auto",
					}}
				>
					Добавить
				</Button>
			</CardActions>
		</Card>
	);
}
