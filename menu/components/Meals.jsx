import React from 'react'
import Container from './Container'
import MealList from './MealList'
import NewMealForm from './NewMealForm'

function Meals() {
    return (
        <main>
            <section className="new-meals">
                <NewMealForm />
            </section>
            <section className="whole-menu">
                <Container title={"All meals"}>
                    <MealList />
                </Container>
            </section>
        </main>
    )
}

export default Meals