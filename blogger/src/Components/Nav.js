import React from 'react'
import {NavLink} from 'react-router-dom'

const Nav = () => {
    return(
        <div className="row">
            <ul className="nav nav-pills">
                <li className="nav-item">
                
                    <NavLink activeClassName="active" to="/" exact className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/posts" activeClassName="active" className="nav-link">Posts</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Nav;