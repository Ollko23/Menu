import React, { useContext, useEffect, useState } from 'react'
import Meal from './Meal'
import ReactLoading from 'react-loading';
import { MealsContext } from "./MealsContext"
import "../css/meals.css"

const MealList = ({ max }) => {
    const { setMeals, meals } = useContext(MealsContext)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const meals = await fetch("https://doubtful-dove-cowboy-hat.cyclic.app/meals")
                if (!meals.ok) throw Error("Error fetching the meals")
                const mealsList = await meals.json()
                mealsList.sort((a, b) => {
                    if (a.lastUse == undefined) return 1
                    if (b.lastUse == undefined) return -1
                    return b.lastUse - a.lastUse
                })
                setMeals(mealsList)
                setIsLoading(false)
            } catch (err) {
                console.log(err.message)
            }
        }
        (async () => await fetchMeals())()
    }, [])

    const [searchTerm, setSearchTerm] = useState("")

    const filteredItems =
        meals.filter(meal => meal.name.toLowerCase().includes(searchTerm.toLowerCase())).slice(0, max)

    return (
        <>
            <label id="searchBox">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} />
            </label>


            {isLoading ? (
                <div className="loading"><ReactLoading type={"bars"} color={"rgba(var(--primary), .5)"} height={'auto'} width={'10%'} /></div>
            )
                : (
                    <div className="meals-container" id='all-meals'>
                        {filteredItems.map(meal => <Meal flipper={true} key={meal._id} meal={meal} />)}
                    </div>
                )}
        </>
    )
}

export default MealList