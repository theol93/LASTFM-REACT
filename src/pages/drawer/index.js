import React, {useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";
import LockOpenIcon from "@material-ui/icons/LockOpen";
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
	const [path, setPath] = React.useState(window.location.pathname);
	const [pages, setPages] = React.useState([]);
	let [depsPages, getDepsPages] = React.useState([localStorage.getItem("name")])

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};



	useEffect(()=> {
		setPath(window.location.pathname);
		pages.find((el, i)=> {
			if(path === el.to) {
				return setValue(i);
			} else {
				return null
			}
		});
	}, [path, pages]);

	useEffect(()=> {
		function getPage(){
			depsPages !== null ?
				setPages([
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
						label: depsPages,
						to: "/user",
						icon: <LockOpenIcon/>
					}
				])
				:
				setPages([
					{
						label: "ПОИСК",
						to: "/",
						icon:  <SearchIcon/>
					},
					{
						label:"ЛОГИН",
						to:"/login",
						icon:<LockOpenIcon />
					}
				])
		}

		getPage()
		console.log("deps",depsPages)
		}, [depsPages]);

	useEffect(()=> {
		getDepsPages(localStorage.getItem("name"));
		console.log("init", )
	},)

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


