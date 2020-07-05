import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';

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
                <Tab  label="Search" value="/search" component={Link} to="/search"/>
                <Tab  label="Saved" value="/saved" component={Link} to="/saved"/>
                <Tab  label="Page404" value="/page404" component={Link} to="/page404"/>
                <Tab  label="Login" value="/login" component={Link} to="/login"/>
                <Tab  label="Register" value="/register" component={Link} to="/register"/>
            </Tabs>
        </Paper>
    );
}

