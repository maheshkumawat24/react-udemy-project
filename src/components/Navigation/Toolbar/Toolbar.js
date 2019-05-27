import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigaionItems from '../NavigationItems/NavigationItems';
const toolbar = () => {
    return ( 
        <header className={classes.Toolbar}>
            <div>MENU</div>
            <Logo height="80%"></Logo>
            <nav>
               <NavigaionItems></NavigaionItems>
            </nav>
        </header>
     );
}
 
export default toolbar;