import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
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
                <Tab  label="Search" value="/search" component={Link} to="/search" icon={<SearchIcon />} />
                <Tab  label="Saved" value="/saved" component={Link} to="/saved" icon={<FavoriteBorderIcon />} />
                <Tab  label="Page404" value="/page404" component={Link} to="/page404" icon={<NotInterestedIcon />} />
                <Tab  label="Login" value="/login" component={Link} to="/login" icon={<LockOpenIcon />} />
                <Tab  label="Register" value="/register" component={Link} to="/register" icon={<ExitToAppIcon />} />
            </Tabs>
        </Paper>
    );
}

