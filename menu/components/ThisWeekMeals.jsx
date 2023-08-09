import React, { useContext, useEffect } from 'react';
import { MealsContext } from './MealsContext';
import Meal from './Meal';
import fetchMenu from "../javascript/fetchMenu"
import "../css/thisWeekMeals.css"
function ThisWeekMeals() {
    const { meals, menu, setMenu, setMeals } = useContext(MealsContext);
    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const menu = await fetch("https://doubtful-dove-cowboy-hat.cyclic.app/menu")
                if (!menu.ok) throw Error("Error fetching the menu")
                const response = await menu.json()
                const menuList = response[0].meals
                if (menuList) setMenu(menuList)

            } catch (err) {
                console.log(err.message)
            }
        }
        (async () => await fetchMeals())()

    }, []);


    let finalIndex;

    function allowDrop(ev) {
        ev.preventDefault();
        let children = [...ev.target.children];
        if (
            children &&
            children.length > 1 &&
            children[1].className === 'meal-container meal'
        ) {
            const gap = children[1].getBoundingClientRect().left - children[0].getBoundingClientRect().right
            let result = children.reduce(
                (closest, child, index) => {
                    if (child.className === 'meal-container meal') {
                        let y = ev.clientX;
                        const left = child.getBoundingClientRect().left;
                        let offset = y - left;
                        if (offset < 0 && offset > closest.offset) {
                            return { offset: offset, index: index };
                        } else return closest;
                    }
                },
                { offset: Number.NEGATIVE_INFINITY, index: children.length - 1 }
            );
            finalIndex = result.index;
        }
    }

    async function drop(ev) {
        ev.preventDefault();
        const data = JSON.parse(ev.dataTransfer.getData('application/json'));
        if (data.parent === 'all-meals') {
            if (menu.length > 6) return;
            const meal = Object.assign({}, meals.find(el => el.name === data.name.toString()));
            meal._id = await fetchMenu("POST", meal);
            meal.parent = data.parent;
            const newMenu = [...menu, meal];
            setMenu(newMenu);
        }

        if (data.parent === 'menu') {
            const items = Array.from(menu);
            const [reorderedItem] = items.splice(data.index, 1);
            if (data.index < finalIndex) {
                finalIndex -= 1
            }
            items.splice(finalIndex, 0, reorderedItem);
            setMenu(items);
            await fetchMenu("PUT", items)
        }
    }

    return (
        <>
            <div className="grid">
                <div className="day">Mon</div>
                <div className="day">Tue</div>
                <div className="day">Wed</div>
                <div className="day">Thu</div>
                <div className="day">Fri</div>
                <div className="day">Sat</div>
                <div className="day">Sun</div>
            </div>
            <div
                className="meals grid"
                id="menu"
                onDrop={drop}
                onDragOver={allowDrop}
            >
                {menu && menu.length > 0 &&
                    menu.map((meal, index) => {
                        return <Meal key={index} meal={meal} index={index} />;
                    })}
            </div>
        </>
    );
}

export default ThisWeekMeals;
