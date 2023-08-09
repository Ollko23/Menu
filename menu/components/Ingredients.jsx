import React, { useContext, useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid';
import { MealsContext } from './MealsContext';
import "../css/ingredients.css"

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

        const finalList = ingredientsList.reduce((all, ingredient) => {
            if (all[ingredient] > 0) return { ...all, [ingredient]: all[ingredient] += 1 }
            else return { ...all, [ingredient]: 1 }
        }, {})

        setIngredients(Object.entries(finalList))
    }, [menu])

    return (
        <section className='ingredients'>
            <h3>Ingredients</h3>
            <ul onClick={() => navigator.clipboard.writeText(copiedText.current.innerText)}>{ingredients.map(ingredient => {
                const [key, value] = ingredient
                const print = `${key} ${value > 1 ? " x" + value : ""}`
                return <li className='ingredient' key={uuid()}>{print}</li>
            })}</ul>
        </section>
    )
}

export default Ingredients