import React, { Component } from 'react';
import Aux from '../hoc/Auxx';
import Burger from '../components/Burger/Burger';
import BuildControls from '../components/Burger/BuildControls/BuildControls';
import Modal from '../components/UI/Modal/Modal';
import OrderSummary from '../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICE = {
    salad: 0.3,
    bacon: 0.4,
    cheese: 0.7,
    meat: 1.3
}
export class BurgerBuilder extends Component {
    state = {
        ingredient: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false
    }

    updatePurchaseableState(ingredients) {
        const sum = Object.keys(ingredients)
            .map((igKey)=> {
                return ingredients[igKey];
            })
            .reduce((sum,el)=>{
                return sum +el
            },0);
        this.setState({purchaseable: sum>0});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredient[type];
        const updateCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredient
        };
        updatedIngredients[type] = updateCount;
        const priceAddition = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = priceAddition + oldPrice;
        this.setState({ totalPrice: newPrice, ingredient: updatedIngredients });
        this.updatePurchaseableState(updatedIngredients);
    }
    
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredient[type];
        if (oldCount<=0) {
            return;
        }
        const updateCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredient
        };
        updatedIngredients[type] = updateCount;
        const priceDeduction = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = priceDeduction - oldPrice;
        this.setState({ totalPrice: newPrice, ingredient: updatedIngredients });
        this.updatePurchaseableState(updatedIngredients);
    }

    purchageHandler = () => {
        this.setState({purchasing: true});
    }

    purchageCancelHandler = () => {
        this.setState({purchasing: false});
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredient
        }
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key]<=0;
        }
        return (
           <Aux>
               <Modal 
                show={this.state.purchasing}
                modalClosed={this.purchageCancelHandler}
                >
                   <OrderSummary ingredients={this.state.ingredient}></OrderSummary>
               </Modal>
               <Burger ingredient={this.state.ingredient}></Burger>
               <BuildControls 
               ingredientAdded={this.addIngredientHandler}
               ingredientRemoved={this.removeIngredientHandler}
               disabledInfo={disabledInfo}
               price={this.state.totalPrice}
               purchaseable={this.state.purchaseable}
               ordered={this.purchageHandler}
               />
           </Aux>
        )
    }
}