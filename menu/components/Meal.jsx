import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { MealsContext } from './MealsContext';
import fetchMenu from '../javascript/fetchMenu';
import "../css/meal.css"
const Meal = ({ meal, index, flipper }) => {

    const { _id, name, ingredients, img, link, day } = meal
    const navigate = useNavigate();
    // if (ingredients.length > 12) { const ingredients12 = Array.from(ingredients.slice(0, 13)) }
    // console.log(ingredients12)

    const { menu, setMenu } = useContext(MealsContext)

    const handleDoubleClick = (e) => {

        e.target.className == "front" && navigate(`/meals/${_id}`);
    };

    async function handleDelete(ev) {
        if (ev.target.parentElement.className == "meals-container") return
        const newArray = menu.filter(el => el._id != _id)
        setMenu(newArray)
        fetchMenu("DELETE", _id)
    }

    function drag(ev) {
        const data = {
            name: ev.target.id,
            parent: ev.target.parentElement.id,
            index: index
        }
        console.log(data)
        ev.dataTransfer.setData("application/json", JSON.stringify(data));
    }

    return (
        <>
            {flipper ?
                <div onClick={handleDelete} onDoubleClick={handleDoubleClick} className={"meal-container meal flipper"} id={name} draggable onDragStart={drag}>
                    <div className="front">
                        <div className="title">{name}</div>
                        <img className="img" src={img} />
                    </div>
                    <div className="back">
                        <ul className='flip'>
                            {(ingredients.length > 11 ?
                                Array.from(ingredients.slice(0, 11)).concat("...") : ingredients).map((ingredient, index) => {
                                    return <li key={index}>{ingredient}</li>
                                })}
                        </ul>
                    </div>
                </div>
                : <div onClick={handleDelete} onDoubleClick={handleDoubleClick} className={"meal-container meal"} id={name} draggable onDragStart={drag}>
                    <div className="title">{name}</div>
                    <img className="img" src={img} />
                </div>
            }
        </>)
}

export default Meal