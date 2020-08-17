import React, {useEffect, useRef, useState} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from "@material-ui/core/Container";

export default function Search(){
        const [btnStatus, setBtnStatus] = useState(true);
        const [searchResult, setSearchResult] = useState();
        const [url, setUrl] = useState();

        const inputEl = useRef(null);
        const start = 'http://ws.audioscrobbler.com/2.0/?method=';
        const apiKey = '&api_key=ae106d678c11a00457038f9cd9ad465d&format=json';

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

        useEffect(()=> {
            fetch(url)
                .then(res => res.json())
                .then((result) => {
                    setSearchResult({searchResult: result})
                })
        });

        function getUrl(text, type){
            const url = start + type + text + apiKey;
            setUrl(url);
        }

        function onButtonClick(name){

            setBtnStatus({btnStatus: false});

            let val = inputEl.current.value;
            if (val === ""){
                return;
            } else {

                const final = getUrl(val, name);

                setSearchResult({searchResult: final});
                console.log(final);
                console.log(btnStatus);
                console.log(searchResult);
            }
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
                <Button className={classes.btn} variant="contained" onClick={ () => {onButtonClick("track.search&track=")}}>
                    Song
                </Button>
                <Button className={classes.btn} variant="contained" onClick={ () => {onButtonClick("artist.search&artist=")}}>
                    Artist
                </Button>
            </Container>
            </div>
        );
}

