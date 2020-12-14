import Saved from "../pages/saved/index";
import Search from "../pages/search/index";
import Page404 from "../pages/page404/index";
import Login from "../pages/login/index";
import Drawer from "../pages/drawer/index";
import Result from "../pages/result";
import Token from "../pages/token";
import User from "../pages/user";
import Scrobble from "../pages/scroble";
import TopCharts from "../components/topCharts";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App(props) {
	return (
		<Router>
			<nav>
				<Drawer />
			</nav>
			<nav>
				<Switch>
					<Route exact path="/">
						<Search />
					</Route>
					<Route path="/top">
						<TopCharts
							setArtistsAction={props.setArtistsAction}
							setTracksAction={props.setTracksAction}
							artist={props.artist}
							track={props.track}
							tracksIsFetching={props.tracksIsFetching}
							artistsIsFetching={props.artistsIsFetching}
						/>
					</Route>
					<Route path="/saved">
						<Saved />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/result">
						<Result />
					</Route>
					<Route path="/token">
						<Token />
					</Route>
					<Route path="/scrobble">
						<Scrobble />
					</Route>
					<Route path="/user">
						<User />
					</Route>
					<Route path="*">
						<Page404 />
					</Route>
				</Switch>
			</nav>
		</Router>
	);
}
