import React from 'react'
import'./Navbar.css'

import logo from'../Assets/images.png'
import search from'../Assets/search.png'
import beill from'../Assets/beill.png'
import usear from'../Assets/usear.png'
import power from'../Assets/power.png' 
import setings from'../Assets/setings.png'


const Navbar = () => {
 
  
  return (
    <div className='navbar'> 
    <div className='nav-logo'>
      <img src= {logo} alt=""/>
      <p>my-will</p>
      <div className='search'> </div>
       <input
       type="text"
       placeholder="Search..."
       ></input>
       <div className='search-img'></div>
      <img src={search}alt=''/> 
       <img src={beill}alt="" />
       <div className='setings'></div>
       <img src={setings}alt=''/>
       <div className='beill'></div>
       <div className='usear'></div>
       <img src={usear}alt=''/>
       <div className='power'></div>
       <img src={power}alt=''/>
      
     
    </div>
   
    </div>
  )
}

export default Navbar
