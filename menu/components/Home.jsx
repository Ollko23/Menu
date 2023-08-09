import React, { useState } from 'react'
import MealList from './MealList'
import Container from './Container'
import ThisWeekMeals from './ThisWeekMeals'
import Ingredients from './Ingredients'
// npx json-server -p 3500 -w data/db.json
function Home() {
    return (
        <>
            <Container title={"Meals"} id={"menu"}>
                <MealList max={5} />
            </Container>
            <Container title={"Menu"} id={"weekMeals"}>
                <ThisWeekMeals />
            </Container>
            <Ingredients />
            <footer></footer>
        </>
    )
}

export default Home