import React from 'react'
import "./navbar.css"
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
      const navigate=useNavigate();
    const navigatetoLogin = ()=>
    {
        navigate("/Login");
    }
    return (
        <div className='navbar'>
            <div className="navContainer">
                <span className="logo">HarNak's Cuisine</span>
                <div className="navItems">
                    {/* <button className="navButton">Register</button> */}
                    <button className="navButton" onClick={navigatetoLogin}>Login</button>
                </div>
            </div>
        </div>
    )
}
export default Navbar;