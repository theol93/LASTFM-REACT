import Saved from "../components/saved/index";
import Search from "../components/search/index";
import Page404 from "../components/page404/index";
import Login from "../components/login/index";
import Drawer from "../components/drawer/index";
import Result from "../components/result";
import Token from "../components/token";
import User from "../components/user";
import Scrobble from "../components/scroble";
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
						<User
							setUserInfo={props.setUserInfo}
							user={props.user}
							userIsFetching={props.userIsFetching}
						/>
					</Route>
					<Route path="*">
						<Page404 />
					</Route>
				</Switch>
			</nav>
		</Router>
	);
}
