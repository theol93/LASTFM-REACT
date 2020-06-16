import React from 'react';
import logo from './page404.gif';
import styles from './index.module.css';

export default function(){
    return (
        <div>
            <div className={ styles.head }>404</div>
            <img src={logo} alt={404}/>
            <div className={ styles.body }>Sorry, but you are looking for something that isn’t here.</div>
        </div>
    );
}