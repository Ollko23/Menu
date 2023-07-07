import React from 'react'
import { useContext } from 'react'
import { useParams } from "react-router-dom"
import { MealsContext } from "./MealsContext"
import apiCall from '../javascript/apiCall'
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

function MealDetails() {
    const navigate = useNavigate();
    const { id } = useParams()
    const { meals, setMeals } = useContext(MealsContext)
    const meal = meals.find(el => el._id == id)

    function handleDelete(event) {
        event.preventDefault()
        apiCall("DELETE", id)
        setMeals(prev => prev.filter(meal => meal.id != id))
        navigate(`/`);
    }
    return (
        <>
            <p>Hi</p>
            <h1>Meal name:</h1><h2>{meal ? meal.name : "Not found"}</h2>
            <h1>Meal ingredients:</h1><ul>{meal ? meal.ingredients.map(ingredient => <li key={uuid()}>{ingredient}</li>) : "Not found"}</ul>
            <h1>Meal img:</h1><img className='img details' src={meal ? meal.img : ""} />
            <h1>Instructions:</h1><h2>{meal ? meal.instructions : "Not found"}</h2>
            <button onClick={(event) => handleDelete(event)}>Delete</button>
        </>
    )
}



export default MealDetails