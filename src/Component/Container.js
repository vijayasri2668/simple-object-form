import './App.css';
import React, {useState} from 'react';
import { useForm } from "react-hook-form";


function Container() {
  const[form,setForm]=useState({
    // name:' ',
    ridetype:' ',
    country:' ',
    ToCountry:' ',
    Time:'',
    returnTime:' ',
    passengers:' ',
    pay:' ',
    relation:' '

  })
  const onChange=(e)=>{
    const {value, name} =e.target;

    setForm((state)=>({
      ...state,
      [name]:value
    }))
  }
  const showData=()=>{
    console.log('Form: ',form);
  }
  const onSubmit=(e)=>{
     e.preventDefault()
  }
  return (
    <div className="container">
       {/* <Container/> */}
       <h2 className='heading1'>Indigo</h2>
       <form onSubmit={onSubmit}>
         <div>
           <button className='btn'>Book Flight</button>
           <button className='btn'>Check In</button>
           <button className='btn'>Edit Booking</button>
           <button className='btn'>Fight Status</button>
         </div>
         <p className='heading'>Book a Flight</p>
         <div>
           <input onChange={onChange} type='radio' name='ridetype' value='trip'  className='radiobtn'></input>
           <label>One Way</label>
           <input onChange={onChange} type='radio' name='ridetype' value='roundtrip' className='radiobtn'></input>
           <label>Round Trip</label>
           <input onChange={onChange} type='radio' name='ridetype' value='multitrip' className='radiobtn'></input>
           <label>Multi City</label>
         </div>
         <div>
           <div className='container2'>
             <p className='ptag'>From: </p>
           <select onChange={onChange} name='country' className='item1'>
             <option value='Delhi'>Delhi (DEL)</option>
             <option value='hyderabad'>Hyderabad (Hyd)</option>
             <option value='chennai'>chennai (chennai)</option>
           </select>
           <p className='ptag'>To:</p>
           <select onChange={onChange} name='ToCountry' className='item1'>
             <option>USA</option>
             <option>UK</option>
             <option>canada</option>
           </select>
           </div>
           <div className='container3'>
             <div className='item2'>
               {/* <label className='labeltag'>Departure Time:</label> <br />  */}
               <p>Departure Time:</p>
               <input type='date' onChange={onChange} name='Time' className='timeinpt'></input><br/>
               <label className='labeltag'>Return Date</label><br/>
               <input type='date' onChange={onChange} name='returnTime' className='timeinpt'></input>
              </div>
           </div>
           <div className='container4'>
             <div className='item3'>
               <label>Passengers</label><br/>
               <input type='number' onChange={onChange} name='passengers'></input><br/>
               <label>Pay in(Currency)</label><br/>
               <input type='text' onChange={onChange} name='pay'></input>
             </div>
           </div>
           <div className='container5'>
             <input onChange={onChange} type='radio' name='relation' value='armed'></input>
             <label>Armed Forces</label>
             <input onChange={onChange} type='radio' name='relation' value='family'></input>
             <label>Family</label>
             <input onChange={onChange} type='radio' name='relation' value='friends'></input>
             <label>Friends</label>
             <input onChange={onChange} type='radio' name='relation' value='students'></input>
             <label>Students</label>
           </div>
           <div>
             <input type='submit' className='subt' onClick={showData} />
           </div>
         </div>
       </form>
    </div>
  );
}

export default Container;

