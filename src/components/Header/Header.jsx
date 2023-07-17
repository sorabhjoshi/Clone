import React from 'react'
import logo from "./logo.png"
import { NavLink } from "react-router-dom"
import { ImSearch } from "react-icons/im"

const Header = () => {
    return (
        <nav className="header">

            <img src={logo} alt="logo" />

            <div>
                <NavLink to="/tvshows" >TV Shows</NavLink>
                <NavLink to="/movies" >Movies</NavLink>
                <NavLink to="/recent" >Recently Added</NavLink>
                <NavLink to="/mylist" >My List</NavLink>
            </div>

            <ImSearch />

        </nav>
    )
}

export default Header