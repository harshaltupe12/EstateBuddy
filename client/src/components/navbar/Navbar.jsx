import React, { useContext, useState } from 'react'
import "./navbar.scss"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

function Navbar() {
const[open, setOpen] = useState(false)
const { currentUser } = useContext(AuthContext);
// const user = true;
  return (
    <nav>
        <div className="left">
            <a href="/" className='logo'>
                <img src="/logo.png" alt="" />
                <span>Estate Buddy</span>
            </a>
            <Link to="/">Home</Link>
            <Link to="/profile">About</Link>
            <Link to="/list">Properties</Link>
            <Link to="/">Agents</Link>
        </div>
        <div className="right">
        {currentUser ? (
            <div className="user">
                <img src={currentUser.avatar || "/noavatar.jpg"} alt="" />
                <span>{currentUser.username}</span>
                <Link to="/profile" className="profile">
                    Profile
                </Link>
            </div>
        ) : 
        (
            <>
            <Link to="/login" className="login">Sign in</Link>
            <Link to="/register" className="register">Sign up</Link>
            </>
        )
        }
        <div className="menuIcon">
            <img  src="/menu.png" alt="" onClick={()=> setOpen((prev) => !prev)}/>
        </div>
        <div className={open ? "menu active" : "menu"}>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Agents</a>
            <a href="/">Sign in</a>
            <a href="/">Sign up</a>
        </div>
        </div>
    </nav>
  )
}

export default Navbar