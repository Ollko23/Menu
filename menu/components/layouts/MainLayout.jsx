import React, { useContext } from 'react'
import { Link, Outlet } from "react-router-dom"
import { MealsContext } from '../MealsContext';
import axios from 'axios';

const MainLayout = () => {

    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/menu" >Menu</Link></li>
                    <li><Link to="/meals" >Meals</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>

    )
}

export default MainLayout