import React, { useContext, useRef, useState, useEffect } from 'react'
import apiCall from '../javascript/apiCall'
import { MealsContext } from './MealsContext';

function NewMealForm() {
    const name = useRef(null)
    const img = useRef(null)
    const ingredients = useRef(null)
    const link = useRef(null)
    const instructions = useRef(null)

    const { meals, setMeals } = useContext(MealsContext)

    const handleSubmit = async () => {
        const data = {
            name: name.current.value,
            img: img.current.value,
            ingredients: ingredients.current.value.split(", "),
            link: img.current.value,
            instructions: instructions.current.value,
        }
        const res = await apiCall("POST", data)
        const newMeal = { ...data, _id: res._id }
        console.log(newMeal)
        setMeals(prev => prev.concat(newMeal))

        name.current.value = ""
        img.current.value = ""
        ingredients.current.value = ""
        link.current.value = ""
        instructions.current.value = ""
    }

    return (
        <form onSubmit={handleSubmit} >
            <label htmlFor="name"></label>
            <input required type="text" name="name" id="name" ref={name} placeholder='Name' autoFocus />
            <label htmlFor="img"></label>
            <input required type="text" name="img" id="img" ref={img} placeholder='img' />
            <label htmlFor="ingredients"></label>
            <input required type="text" name="ingredients" id="ingredients" ref={ingredients} placeholder='ingredients' />
            <label htmlFor="link"></label>
            <input required type="text" name="link" id="link" ref={link} placeholder='link' />
            <label htmlFor="instructions"></label>
            <textarea name="instructions" id="instructions" rows="5" cols="50" ref={instructions} placeholder='Instructions' onKeyDown={e => e.keyCode == 13 && handleSubmit()} />
            <button type="submit" id="addMeal">Add meal</button>
        </form>
    )
}

export default NewMealForm