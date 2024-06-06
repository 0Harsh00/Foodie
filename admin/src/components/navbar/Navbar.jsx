import React from 'react'
import './Navbar.css'
import potato from "../../assets/FODDIE.png"
import profile from "../../assets/profile_image.png"

const Navbar = () => {
  return (
    <div className='navbar'>
         <img src={potato} className='logo' alt="logo" />
        <p>𝒜𝒟𝑀𝐼𝒩 𝒫𝒜𝒩𝒩𝐸𝐿</p>
        <img src={profile}  className='profile'alt="profile" />
    </div>
  )
}

export default Navbar