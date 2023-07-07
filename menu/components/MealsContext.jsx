import React, { useState } from 'react';

const MealsContext = React.createContext();

const MealsContextProvider = ({ children }) => {
    const [meals, setMeals] = useState([])
    const [menu, setMenu] = useState([])

    const contextValue = {
        meals,
        setMeals,
        menu,
        setMenu
    }
    return <MealsContext.Provider value={contextValue}>{children}</MealsContext.Provider>
}
export { MealsContext, MealsContextProvider };

