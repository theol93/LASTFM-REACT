import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

export default function ClippedDrawer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerContainer}>
                    <Divider />
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/search">Search</Link>
                                </li>
                                <li>
                                    <Link to="/saved">Saved</Link>
                                </li>
                                <li>
                                    <Link to="/page404">Page404</Link>
                                </li>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                            </ul>
                        </nav>
                    <Divider />
                </div>
            </Drawer>
            <Router />
        </div>
    );
}

