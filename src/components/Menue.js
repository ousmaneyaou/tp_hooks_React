import '../css/Menue.css';
import { NavLink } from "react-router-dom";

const Menue = () => {
    return ( 
        <div className="menu">
            <ul>
                <li><NavLink to="/" className={({ isActive }) => (isActive ? "activeLink" : undefined)}>Home</NavLink></li>
                <li><NavLink to="/add-movie" className={({ isActive }) => (isActive ? "activeLink" : undefined)}>Add Movie</NavLink></li>
                <li><NavLink to="/list-movie" className={({ isActive }) => (isActive ? "activeLink" : undefined)}>List Movies</NavLink></li>
            </ul>
        </div>
    );
}

export default Menue;
