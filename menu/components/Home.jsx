import React, { useState } from 'react'
import MealList from './MealList'
import Container from './Container'
import ThisWeekMeals from './ThisWeekMeals'
import Ingredients from './Ingredients'
// npx json-server -p 3500 -w data/db.json
function Home() {
    return (
        <>
            <div>Home</div>
            <Container title={"Meals"}>
                <MealList />
            </Container>
            <Container title={"Menu"} >
                <ThisWeekMeals />
            </Container>
            <Ingredients />
        </>
    )
}

export default Home