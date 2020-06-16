import Saved from '../pages/saved/index'
import Search from '../pages/search/index';
import Page404 from '../pages/page404/index';
import Login from '../pages/login/index';
import Drawer from '../pages/drawer/index'

import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Grid from "@material-ui/core/Grid";

export default function App() {
    return (

        <Router>
            <Grid container spacing={0}>
                <Grid item xs={3}>
                <nav>
                    <Drawer />
                </nav>
                </Grid>
                <Grid item xs={9}>
                <Switch>
                    <Route path="/search">
                        <Search />
                    </Route>
                    <Route path="/saved">
                        <Saved />
                    </Route>
                    <Route path="/page404">
                        <Page404 />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                </Switch>
                </Grid>
            </Grid>
        </Router>
    );
}
