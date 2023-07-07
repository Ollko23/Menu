import './App.css'
import { Route, Routes } from "react-router-dom"
import Home from "../components/Home"
import Meals from "../components/Meals.jsx"
import MealDetails from '../components/MealDetails'
import MainLayout from '../components/layouts/MainLayout'
import '../style.css'
import { MealsContextProvider } from "../components/MealsContext"

function App() {

  return (
    <>
      <MealsContextProvider>
        <Routes >
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/meals" element={<Meals />} />
            <Route path="/meals/:id" element={<MealDetails />} />
          </Route>
        </Routes>
      </MealsContextProvider>
    </>
  )
}

export default App