import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteBorderSharpIcon from '@material-ui/icons/FavoriteBorderSharp';

const useStyles = makeStyles({
	root: {
		textAlign: "center",
		maxWidth: "300px",
		maxHeight: "180px",
		backgroundColor: "rgb(245, 245, 245)",
	},
	btn: {
		marginLeft: "20px"
	},
	size: {
	whiteSpace: 'nowrap', /* Отменяем перенос текста */
	overflow: 'hidden', /* Обрезаем содержимое */
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
				<CardContent>
					<Typography gutterBottom variant="h6" component="h2" className={classes.size}>
						{prop.title}
					</Typography>
						{prop.subtitle ? (
							<Typography variant="subtitle2" color="textSecondary" component="h6" className={classes.size}>
                            	<p>Исполнитель: {prop.subtitle}</p>
							</Typography>
						) : ("")}
					<Typography variant="subtitle2" color="textSecondary" component="h6" className={classes.size}>
                        <p>Слушателей: {prop.listeners}</p>
					</Typography>
					<Button
						className={classes.btn}
						size="small"
						color="primary"
						href={prop.url}
					>
						Слушать
					</Button>
					<Button
						className={classes.btn}
						onClick={() => {

						}}
						size="small"
						color="primary"
					>
						<FavoriteBorderSharpIcon/>
					</Button>
				</CardContent>
		</Card>
	);
}
