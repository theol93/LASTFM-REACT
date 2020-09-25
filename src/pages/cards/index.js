import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
					<Typography variant="body1" color="textSecondary" component="p">
						Трек: {prop.subtitle}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
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
						left: "25%",
						top: "-25%",
					}}
				>
					Ссылка на радио
				</Button>
			</CardActions>
		</Card>
	);
}
