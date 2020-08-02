import React, { useRef } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from "@material-ui/core/Container";
import SearchStore from "../../store/search";


export default function Search(){

        const useStyles = makeStyles((theme) => ({
            root: {
                '& > *': {
                    marginTop: "64px",
                    margin: theme.spacing(1),
                    width: '500px',
                },
            },
            btn: {
                marginTop: "32px",
                border: 0,
                marginLeft: "15px",
                borderRadius: 13,
                height: 54,
                padding: '0 80px',
                width: 100,
            }
        }));

        const classes = useStyles();
        const inputEl = useRef(null);

        const onButtonClick = () => {
            inputEl.current.focus();
            console.log(inputEl.current.value)
        };

        return(<div>
            <Container component="main" maxWidth="sm" align="center">
            <form className={classes.root} noValidate autoComplete="on">
                <TextField
                    id="outlined-secondary"
                    variant="outlined"
                    color="primary"
                    placeholder="Введите строку для поиска в это поле"
                    inputRef={inputEl}
                />
            </form>
            </Container>
            <Container component="main" maxWidth="sm" align="center">
                <Button className={classes.btn} variant="contained" onClick={onButtonClick}>
                    Song
                </Button>
                <Button className={classes.btn} variant="contained" onClick={onButtonClick}>
                    Artist
                </Button>
            </Container>
            </div>
        );
}

