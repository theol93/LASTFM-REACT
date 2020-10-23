import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AddIcon from '@material-ui/icons/Add';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
	},
});

export default function CenteredTabs() {
	const classes = useStyles();

	const [value, setValue] = React.useState(0);
	const [path, setPath] = React.useState(window.location.pathname);
	const [pages, setPages] = React.useState([]);
	const [depsPages, getDepsPages] = React.useState(null);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	useEffect(() => {
		setPath(window.location.pathname);
		pages.find((el, i) => {
			if (path === el.to) {
				return setValue(i);
			} else {
				return null;
			}
		});
	}, [path, pages]);

	useEffect(() => {
		(function () {
			depsPages !== null
				? (function () {
						return setPages([
							{
								label: "ТОП 10",
								to: "/top",
								icon: <MusicNoteIcon />,
							},
							{
								label: "ПОИСК",
								to: "/",
								icon: <SearchIcon />,
							},
							{
								label: "СОХРАНЕННЫЕ",
								to: "/saved",
								icon: <FavoriteBorderIcon />,
							},
							{
								label: "СКРОБЛ",
								to: "/scrobble",
								icon: <AddIcon />
							},
							{
								label: depsPages,
								to: "/user",
								icon: <LockOpenIcon />,
							}
						]);
				  })()
				: (function () {
						getDepsPages(localStorage.getItem("name"));
						setPages([
							{
								label: "ТОП",
								to: "/top",
								icon: <MusicNoteIcon />,
							},
							{
								label: "ПОИСК",
								to: "/",
								icon: <SearchIcon />,
							},
							{
								label: "ЛОГИН",
								to: "/login",
								icon: <LockOpenIcon />,
							},
						]);
				  })();
		})();
	}, [depsPages]);

	return (
		<Paper className={classes.root}>
			<Tabs
				value={value}
				onChange={handleChange}
				indicatorColor="primary"
				textColor="primary"
				centered
			>
				{pages.map((el, index) => {
					return <Tab component={Link} {...el} key={index} />;
				})}
			</Tabs>
		</Paper>
	);
}
