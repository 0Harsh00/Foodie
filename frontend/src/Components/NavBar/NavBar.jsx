import { assets } from '../../assets/assets'
import './NavBar.css'
import React, { useContext, useState } from 'react'
import potato from '../../assets/mooi.png'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import profile from "../../assets/profile_icon.png";
import bagicon from "../../assets/bag_icon.png";
import logouta from "../../assets/logout_icon.png";


function NavBar({setShowLogin}) {
  const {totalCartAmount,token,setToken} = useContext(StoreContext);
  const [menu,setmenu] =  useState('')
  const navigate = useNavigate();
  const logout = ()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }
  return (
    <div className='nav'>
           <Link to='/'><img src={potato} alt="logo" className='logo' /></Link> 
            <ul className="nav-menu">
              <Link to='/' onClick={()=>setmenu("home")} id='h' className={menu === "home"?"active":""}>home</Link>
              <a href='#explore-menu' onClick={()=>setmenu("menu")} id='m' className={menu === "menu"?"active":""}>menu</a>
              <a href='#download-app' onClick={()=>setmenu("about")} id='a' className={menu === "about"?"active":""}>about</a>
              <a href='#footer' onClick={()=>setmenu("contact-us")} id='c' className={menu === "contact-us"?"active":""}>contact us</a>
            </ul>
            <div className="nav-right-side">
              <img src={assets.search_icon} alt="searchicon" className='searchicon1' />
              <div className="navsearchicon">
              <Link to='/Cart'><img src={assets.basket_icon} alt="basket icon" className='searchicon' /></Link>
                <div className={totalCartAmount() === 0 ? "" :"reddot"}></div>
              </div>
              <div className="signin_btn">
                {!token? <button onClick={()=>setShowLogin(true)}>sign in</button>:<div className='navbar-profile'>
                  <img className='profile' src={profile} alt="" />
                  <ul className="nav-profile-dropdown">
                    <li><img src={bagicon} alt="" /><p>Orders</p></li>
                    <hr />
                    <li onClick={logout}><img src={logouta} alt="" /><p>Logout</p></li>
                  </ul>
                  </div>}
               
              </div>
            </div>
    </div>
  )
}

export default NavBar