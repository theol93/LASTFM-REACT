import React from 'react';
import Container from "@material-ui/core/Container";
import style from './index.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
}));

export default function Saved(){
    const classes = useStyles();

    return(
        <Container component="main" maxWidth="sm" align="center" className={style.body}>
            <div>
                <div className={classes.root}>
                    <h3>Top Artists</h3>
                    <Paper elevation={4}><p>You haven't listened to any music in the selected date range.</p></Paper>
                </div>
            </div>
            <div className={classes.root}>
                <h3>Top Albums</h3>
                <Paper elevation={4}><p>You haven't listened to any music in the selected date range.</p></Paper>
            </div>
            <div className={classes.root}>
                <h3>Top Tracks</h3>
                <Paper elevation={4}><p>You haven't listened to any music in the selected date range.</p></Paper>
            </div>
        </Container>
    )
}