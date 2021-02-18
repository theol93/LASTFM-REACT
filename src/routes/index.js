import Saved from '../containers/saved/index'
import Search from '../containers/search/index'
import Page404 from '../components/page404/index'
import Login from '../components/login/index'
import Drawer from '../containers/drawer/index'
import Token from '../api/token'
import User from '../containers/user'
import Scrobble from '../containers/scroble'
import TopCharts from '../containers/topCharts'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export default function App(props) {
	return (
		<Router>
			<nav>
				<Drawer />
			</nav>
			<nav>
				<Switch>
					<Route exact path="/">
						<Search
							artistsSearch={props.artistsSearch}
							artistsSearchIsFetching={
								props.artistsSearchIsFetching
							}
							setSearchArtists={props.setSearchArtists}
							tracksSearch={props.tracksSearch}
							tracksSearchIsFetching={
								props.tracksSearchIsFetching
							}
							setSearchTracks={props.setSearchTracks}
							setTracksSaved={props.setTracksSaved}
							tracksSavedIsFetching={
								props.tracksSaved.tracksSavedIsFetching
							}
							tracksSaved={props.tracksSaved}
						/>
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
						<Saved
							tracksSaved={props.tracksSaved}
							tracksSavedIsFetching={
								props.tracksSaved.tracksSavedIsFetching
							}
							artistsSaved={props.artistsSaved}
							artistsSavedIsFetching={
								props.artistsSaved.artistsSavedIsFetching
							}
							setTracksSaved={props.setTracksSaved}
							setArtistsSaved={props.setArtistsSaved}
						/>
					</Route>
					<Route path="/login">
						<Login />
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
	)
}
