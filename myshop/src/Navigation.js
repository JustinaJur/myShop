import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = (props) => {
    return (
        < nav >
            <ul className="nav">
                <li><NavLink to="/"> products </NavLink></li>
                <li><NavLink to="/Cart"> Cart </NavLink> </li>
                <li><NavLink to="/Contacts"> Contacts </NavLink> </li>
            </ul>
        </nav >

    )
}




export default Navigation 