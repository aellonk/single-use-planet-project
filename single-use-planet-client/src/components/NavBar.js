import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <ul>
          <li>
            <NavLink exact to="/items">Browse Items</NavLink>
          </li>
          <li>
            <NavLink exact to="/about">About</NavLink>
          </li>
        </ul>
    </nav>
  )
}

export default NavBar