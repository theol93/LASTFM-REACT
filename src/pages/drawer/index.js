import React, { useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
	},
});

export default function CenteredTabs() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const pages = [
		{
			label: "ПОИСК",
			to: "/",
			icon:  <SearchIcon/>
		},
		{
			label:"СОХРАНЕННЫЕ",
			to:"/saved",
			icon: <FavoriteBorderIcon />
		},
		{
			label:"404",
			to:"/page404",
			icon: <NotInterestedIcon />
		},
		{
			label:"ЛОГИН",
			to:"/login",
			icon:<LockOpenIcon />
		},
		{
			label:"РЕГИСТРАЦИЯ",
			to:"/register",
			icon: <ExitToAppIcon />
		},
	];

	 useEffect(() => {
		 let path = window.location.pathname;
		 pages.find((el, i)=> {
			 if(path === el.to) {
				 return setValue(i);
			 } else {
				 return null
			 }
	})}, [pages]);

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
					return(
						<Tab
							component={Link}
							{...el}
							key={index}
						/>
						);
				})}
			</Tabs>
		</Paper>
	);
}


