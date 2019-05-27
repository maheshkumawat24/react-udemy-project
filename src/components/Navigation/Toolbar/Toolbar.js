import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigaionItems from '../NavigationItems/NavigationItems';
const toolbar = () => {
    return (
        <header className={classes.Toolbar}>
            <div>MENU</div>
            <div className={classes.Logo}>
                <Logo></Logo>
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigaionItems></NavigaionItems>
            </nav>
        </header>
    );
}

export default toolbar;