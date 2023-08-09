import { Link, Outlet } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight, faCircleLeft } from '@fortawesome/free-regular-svg-icons';
import "../../css/mainLayout.css"
const MainLayout = () => {

    return (
        <>
            <nav>
                <ul className="nav">
                    <li className={"icon l"} ><Link to="/" ><FontAwesomeIcon icon={faCircleLeft} />  Home </Link></li>
                    <li className={"icon r"} ><Link to="/meals" >Meals  <FontAwesomeIcon icon={faCircleRight} /></Link></li>
                </ul>
            </nav >
            <Outlet />
        </>

    )
}

export default MainLayout