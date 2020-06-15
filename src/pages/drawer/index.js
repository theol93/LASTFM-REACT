import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import Button from "@material-ui/core/Button";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {

        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
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
                        <List component="nav" className={classes.root} aria-label="mailbox folders">
                            <Link to="/search">
                                <ListItem button>
                                    <ListItemText primary="Search" />
                                </ListItem>
                            </Link>
                            <Divider />
                            <Link to="/saved">
                                <ListItem button>
                                    <ListItemText primary="Saved" />
                                </ListItem>
                            </Link>
                            <Divider />
                            <Link to="/page404">
                                <ListItem button>
                                    <ListItemText primary="Page404" />
                                </ListItem>
                            </Link>
                            <Divider />
                            <Link to="/login">
                                <ListItem button>
                                    <ListItemText primary="Login" />
                                </ListItem>
                            </Link>
                        </List>
                    <Divider />
                </div>
            </Drawer>

            <Router />
        </div>
    );
}

