import React from 'react'
import { logout } from '../../utils/server.js'

const Navbar = ({ userEmail }) => {
  return (
    <div className="nav">
      <li
        className="nav-element nav-clickable"
        onClick={logout}
      >
        Logout
      </li>
      <li className="nav-element">
        User Email: {userEmail}
      </li>
    </div>
  )
}

export default Navbar
