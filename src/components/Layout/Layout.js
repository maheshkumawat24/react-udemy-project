import React from 'react';
import Aux from '../../hoc/Auxx';
import classes from './Layout.module.css'
const layout = (props) => (
    <Aux>
        <div> Sidebar, MainDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;