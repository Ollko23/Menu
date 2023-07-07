import React, { useContext, useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid';
import { MealsContext } from './MealsContext';


function Ingredients() {
    const [ingredients, setIngredients] = useState([])
    const { menu } = useContext(MealsContext)
    useEffect(() => {
        const meals = menu.reduce(((all, meal) => {
            if (all.some(el => el.name == meal.name) == false) return all.concat(meal)
            return all
        }), [])
        const ingredientsList = meals.length ? meals.reduce((all, meal) => {
            return all.concat(meal.ingredients)
        }, []) : meals
        setIngredients(ingredientsList)
    }, [menu])

    return (
        <ul>{ingredients.map(ingredient => <li key={uuid()}>{ingredient}</li>)}</ul>
    )
}

export default Ingredients