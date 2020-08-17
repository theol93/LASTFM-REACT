import React from 'react';
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

export default function Result(){
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

    return(
        <div>
            <Container component="main" maxWidth="sm" align="center">
                <form className={classes.root} noValidate autoComplete="on">
                    dsdsdsdsds
                </form>
            </Container>
            <Container component="main" maxWidth="sm" align="center">
                <Button className={classes.btn} variant="contained" href="/search">
                    Back to SEARCH!
                </Button>
            </Container>
        </div>
    )

}
