import React from 'react'
import'./Home.css'


import pic from'../Assets/pic.jpg'
import back from'../Assets/back.png'

const Home = () => {
  return (

    
    <div className='home-1'>
        <div className='pic'></div>
      <img src={pic} alt=''/>

      <p>D.O.C  : 28/04/2013</p>
      <p> STATUS : Complete</p>
      <br></br> <br></br> <br></br>
      <dr></dr><br></br><br></br>
      <br></br><br></br> <br></br>
      <br></br><br></br> <br></br>
      <br></br><br></br> <br></br>
     <br></br>
     <p  className = "butten"onClick={""}> <img src={back}alt=''/> Back Home </p> 
     
     
     
     </div>




    
  )
}

export default Home
