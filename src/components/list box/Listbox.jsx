import React from 'react'
import'./Listbox.css'
const Listbox = () => {

    const beneficiaries =[
        { id:1,name:"vaishnavi",relationship:"Sister",dob:"04/10/1988",status:"Active",selected:true},
        { id:2,name:"vaishnavi",relationship:"Sister",dob:"04/10/1988",status:"Active",selected:true},
        { id:3,name:"vaishnavi",relationship:"Sister",dob:"04/10/1988",status:"Inactive",selected:false},
        { id:4,name:"vaishnavi",relationship:"Sister",dob:"04/10/1988",status:"Active",selected:true},
        { id:5,name:"vaishnavi",relationship:"Sister",dob:"04/10/1988",status:"Active",selected:true},
        

    ] ;

  return (
    <div className="table-container"> 
        <h4>List of Beneficiaries</h4>
    <button  className='btn'>Edit</button>
    <button className='btns' >Delete</button>
    <table className="beneficiaries-table">
      <thead>
        <tr>
          <th>S. No</th>
          <th>Name</th>
          <th>Relationship</th>
          <th>Date of Birth</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {beneficiaries.map((beneficiary, index) => (
          <tr key={beneficiary.id} className={beneficiary.selected ? "selected" : ""}>
            
            <td>
              <input type="checkbox" checked={beneficiary.selected} readOnly />
            </td>
            <td>{beneficiary.name}</td>
            <td>{beneficiary.relationship}</td>
            <td>{beneficiary.dob}</td>
            <td> {beneficiary.status}</td>
            
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
};

 
export default Listbox
