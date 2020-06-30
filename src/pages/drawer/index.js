import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItem';

import Link from '@material-ui/core/Link';
import {
    BrowserRouter as Router,
} from "react-router-dom";

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

    return (
        <Paper className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab  label="Search" href="/search">
                    <ListItem button>
                        <ListItemText primary="Search" />
                    </ListItem>
                </Tab >
                 <Tab  label="Saved" href="/saved">
                    <ListItem button>
                        <ListItemText primary="Saved" />
                    </ListItem>
                </Tab >
                <Tab  label="Page404" href="/page404">
                    <ListItem button>
                        <ListItemText primary="Page404" />
                    </ListItem>
                </Tab >
                <Tab  label="Login" href="/login">
                    <ListItem button>
                        <ListItemText primary="Login" />
                    </ListItem>
                </Tab >
                <Tab  label="Register" href="/register">
                    <ListItem button>
                        <ListItemText primary="Register" />
                    </ListItem>
                </Tab >
            </Tabs>
        </Paper>
    );
}

