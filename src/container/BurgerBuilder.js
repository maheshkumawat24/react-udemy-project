import React, { Component } from 'react';
import Aux from '../hoc/Auxx';

export class BurgerBuilder extends Component {
    render() {
        return (
           <Aux>
               <div>Burger</div>
               <div>Build controls</div>
           </Aux>
        )
    }
}