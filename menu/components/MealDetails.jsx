import React from 'react'
import { useContext, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { MealsContext } from "./MealsContext"
import apiCall from '../javascript/apiCall'
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import "../css/mealDetails.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

function MealDetails() {
    const { meals, setMeals } = useContext(MealsContext)
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
    const navigate = useNavigate();
    const { id } = useParams()

    const meal = meals.find(el => el._id == id)
    async function handleDelete(event) {
        event.preventDefault()
        await apiCall("DELETE", id)
        setMeals(prev => prev.filter(meal => meal.id != id))
        navigate(`/`);
    }
    return (
        <div id="details">
            <h1>Meal name:</h1><h2>{meal ? <a target={"_blank"} href={meal.link}>{meal.name}</a> : "Not found"}</h2>
            <h1>Meal ingredients:</h1><ul>{meal ? meal.ingredients.map(ingredient => <li key={uuid()}>{ingredient}</li>) : "Not found"}</ul>
            <h1>Meal img:</h1><img className='img details' src={meal ? meal.img : ""} />
            <h1>Instructions:</h1><h2>{meal ? meal.instructions : "Not found"}</h2>
            <button onClick={(event) => handleDelete(event)}>Delete <FontAwesomeIcon icon={faTrashCan} /></button>
            <footer></footer>
        </div>
    )
}



export default MealDetails