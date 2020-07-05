import React from 'react';
import Container from "@material-ui/core/Container";
import style from './index.module.css'
export default function Saved(){
    return(
        <Container component="main" maxWidth="sm" align="center" className={style.body}>
            Saved music
        </Container>
    )
}