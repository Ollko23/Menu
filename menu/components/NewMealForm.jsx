import React, { useContext, useRef, useState, useEffect } from 'react'
import apiCall from '../javascript/apiCall'
import { MealsContext } from './MealsContext';
import "../css/newMealForm.css"
function NewMealForm() {
    const name = useRef(null)
    const img = useRef(null)
    const ingredients = useRef(null)
    const link = useRef(null)
    const instructions = useRef(null)

    const { meals, setMeals } = useContext(MealsContext)

    const handleSubmit = async (event) => {
        console.log(event)
        event.preventDefault()
        const data = {
            name: name.current.value,
            img: img.current.value,
            ingredients: ingredients.current.value.split(", "),
            link: link.current.value,
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
    const handleEnter = (event) => {
        console.log(event.key)
        if (event.key == "Enter" && !event.shiftKey) {
            event.preventDefault()
            handleSubmit()
        }
    }
    return (
        <>
            <form id='new-meal-form' onSubmit={handleSubmit} >
                <label id="name" htmlFor="name">
                    <input required type="text" name="name" ref={name} placeholder='Name' /></label>
                <label id="img" htmlFor="img">
                    <input required type="text" name="img" ref={img} placeholder='img' /></label>
                <label id="link" htmlFor="link">
                    <input required type="text" name="link" ref={link} placeholder='link' /></label>
                <label id="ingredients" htmlFor="ingredients">
                    <input required type="text" name="ingredients" ref={ingredients} placeholder='ingredient, ingredient, ingredient, ...' /></label>
                <label id="instructions" htmlFor="instructions">
                    <textarea name="instructions" rows="5" cols="50" ref={instructions} placeholder='Instructions' onKeyDown={handleEnter} /></label>
                <button type="submit" id="addMeal">Add meal</button>

            </form>

        </>
    )
}

export default NewMealForm