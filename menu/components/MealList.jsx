import React, { useContext, useEffect } from 'react'
import Meal from './Meal'
import { MealsContext } from "./MealsContext"

const MealList = () => {
    const { setMeals, meals } = useContext(MealsContext)
    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const meals = await fetch("https://doubtful-dove-cowboy-hat.cyclic.app/meals")
                if (!meals.ok) throw Error("Error fetching the meals")
                const mealsList = await meals.json()
                setMeals(mealsList)
            } catch (err) {
                console.log(err.message)
            }
        }
        (async () => await fetchMeals())()
    }, [])
    return (
        <>
            <div className="meals-container" id='meals'>
                {meals.map(meal => <Meal key={meal._id} meal={meal} />)}
            </div>
        </>
    )
}

export default MealList