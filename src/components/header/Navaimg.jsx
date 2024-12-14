import React from 'react'
import'./Navimg.css'


import logo from'../Assets/add.png'
import home from'../Assets/home.png'
import wallet from'../Assets/wallet.png'
import link from'../Assets/link.png'
import pen from'../Assets/pen.png'
import page from'../Assets/page.png'


const Navaimg = () => {
  return (
    <div className='nav'> 
    <div className='nav-logos'>
    <img src= {logo} alt=""/>
    <p className='user'>  <b>ADD</b> <br></br> Beneficiaries</p></div>
    <div className='home'>
    <img src={home} alt=''/>
    <p> <b>ADD</b> <br></br> Asset </p></div>
    <div className='wallet'>
    <img src={wallet} alt=''/>
    <p> <b>ADD</b><br></br> Libility</p></div>
    <div className='link'>
    <img src={link} alt=''/>
    <p> <b>CREATE </b><br></br> Links</p></div>
    <div className='pen'>
    <img src={pen} alt=''/>
    <p> <b>ADD</b> <br></br> Singnatories</p></div>
    <div className='page'>
    <img src={page} alt=''/>
    <p> <b>0</b> <br></br> Will Generation</p></div>
      </div>
    
   
  
  )
}

export default Navaimg
