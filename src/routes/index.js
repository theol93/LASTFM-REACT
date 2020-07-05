import Saved from '../pages/saved/index'
import Search from '../pages/search/index';
import Page404 from '../pages/page404/index';
import Login from '../pages/login/index';
import Drawer from '../pages/drawer/index';
import Register from '../pages/register/index';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

export default function App() {
    return (

        <Router>
            <nav>
                <Drawer />
            </nav>
            <nav>
                <Switch>
                    <Route path="/search">
                        <Search />
                    </Route>
                    <Route path="/saved">
                        <Saved />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="*">
                        <Page404 />
                    </Route>
                </Switch>
            </nav>
        </Router>
    );
}
