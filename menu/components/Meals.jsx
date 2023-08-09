import React from 'react'
import Container from './Container'
import MealList from './MealList'
import NewMealForm from './NewMealForm'
import "../css/wholeMenu.css"
function Meals() {
    return (
        <main>
            <section className="new-meal">
                <NewMealForm />
            </section>
            <section className="whole-menu">
                <Container title={"All meals"}>
                    <MealList />
                </Container>
            </section>
            <footer></footer>
        </main>
    )
}

export default Meals