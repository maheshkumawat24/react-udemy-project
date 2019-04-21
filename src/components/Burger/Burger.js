import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredient)
        .map((igKey)=> {
            return [...Array(props.ingredient[igKey])].map((_,i)=>{
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        }).reduce((arr,el) =>{
            return arr.concat(el);
        },[]);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p> Pleast start adding ingredients </p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
                { transformedIngredients }
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default Burger;