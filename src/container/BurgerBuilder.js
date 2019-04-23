import React, { Component } from 'react';
import Aux from '../hoc/Auxx';
import Burger from '../components/Burger/Burger';
import BuildControls from '../components/Burger/BuildControls/BuildControls';

export class BurgerBuilder extends Component {
    state = {
        ingredient: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 1
        }
    }
    render() {
        return (
           <Aux>
               <Burger ingredient={this.state.ingredient}></Burger>
               <BuildControls />
           </Aux>
        )
    }
}