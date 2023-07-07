import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { MealsContext } from './MealsContext';
import fetchMenu from '../javascript/fetchMenu';

const Meal = ({ meal, index }) => {

    const { _id, name, ingredients, img, day } = meal
    const navigate = useNavigate();


    const { menu, setMenu } = useContext(MealsContext)

    const handleDoubleClick = () => {
        navigate(`/meals/${_id}`);
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
        ev.dataTransfer.setData("application/json", JSON.stringify(data));
    }
    return (
        <div onClick={handleDelete} onDoubleClick={handleDoubleClick} className={day ? `meal-container ${day}` : "meal-container meal"} id={name} draggable onDragStart={drag}>
            <div className="title">{name}</div>
            <img className="img" src={img} />
        </div>
    )
}

export default Meal