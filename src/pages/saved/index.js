import React from 'react';
import Container from "@material-ui/core/Container";
import style from './index.module.css';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
            <div className={classes.root}>
                    <h3>Top Artists</h3>
                    <List component="nav" aria-label="secondary mailbox folders">
                        <ListItem >
                            <ListItemText>Artists</ListItemText>
                        </ListItem>
                    </List>
            </div>
            <div className={classes.root}>
                    <h3>Top Albums</h3>
                    <List component="nav" aria-label="secondary mailbox folders">
                        <ListItem >
                            <ListItemText>Albums</ListItemText>
                        </ListItem>
                    </List>
            </div>
            <div className={classes.root}>
                    <h3>Top Tracks</h3>
                    <List component="nav" aria-label="secondary mailbox folders">
                        <ListItem >
                            <ListItemText>Tracks</ListItemText>
                        </ListItem>
                    </List>
            </div>
        </Container>
    )
}