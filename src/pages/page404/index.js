import React from 'react';
import logo from './page404.gif';
import styles from './index.module.css';
import Container from "@material-ui/core/Container";

export default function(){
    return (
        <Container component="main" maxWidth="xs">
            <div className={ styles.head }>Error 404</div>
            <img src={logo} height={"400px"} alt={404}/>
            <div className={ styles.body }>Sorry, but you are looking for something that isn’t here.</div>
        </Container>
    );
}