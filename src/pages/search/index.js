import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



export default function Search(){

        const useStyles = makeStyles((theme) => ({
            root: {
                '& > *': {
                    margin: theme.spacing(1),
                    width: '500px',
                },
            },
            btn: {
                border: 0,
                borderRadius: 3,
                height: 54,
                padding: '0 30px',
                width: '100px',
            }
        }));

        const classes = useStyles();

        return(
            <form className={classes.root} noValidate autoComplete="on">
                <TextField
                    id="outlined-secondary"
                    variant="outlined"
                    color="primary"
                    placeholder="Введите строку для поиска в это поле"
                />
                <Button className={classes.btn} variant="contained">
                    Song
                </Button>
                <Button className={classes.btn} variant="contained">
                    Artist
                </Button>
            </form>
        );
}

