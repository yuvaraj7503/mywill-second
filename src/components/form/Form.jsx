import React from 'react'
import'./form.css'
const Form = () => {
  return (
    <div >
     <form className='form'>
        <h3>   Add new Benficiary  </h3>
        <h4> _______________________</h4>
        <label for ="name"> Personal informaation <br></br> 
        <input type='text' placeholder='Title*'/><br></br><br></br>
        <input type='text' placeholder='First Name*   Middle Name  Last sName'/><br></br><br></br>
        <input type='text' placeholder='Gender*'/><br></br><br></br>
        <input type='text' placeholder='Date of Birth*'/><br></br><br></br>
        <input type='text' placeholder='Religion*'/><br></br><br></br>
        <input type='text' placeholder='Father Name*'/><br></br><br></br>
        <input type='text' placeholder='Mother Name*'/><br></br><br></br> 
        <button>CNCEL</button>  </label>
        <button className='up'>UPDATE</button> 
       
        
        
    </form>   
      
    </div>
  )
}

export default Form;
