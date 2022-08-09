import React from 'react'
import './App.css';
import { useForm } from "react-hook-form";


function FormCont() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        ridetype:' ',
        country:' ',
        ToCountry:' ',
        Time:'',
        returnTime:' ',
        passengers:' ',
        pay:' ',
        relation:' '
    });
    const onSubmit = data => alert(JSON.stringify(data));
    const country=watch('country')
    // console.log(country);
    const isValid=country
  return (
    <div className="container">
       <h2 className='heading1'>Indigo</h2>
       <form onSubmit={handleSubmit(onSubmit)}>
         <div>
           <button className='btn'>Book Flight</button>
           <button className='btn'>Check In</button>
           <button className='btn'>Edit Booking</button>
           <button className='btn'>Fight Status</button>
         </div>
         <p className='heading'>Book a Flight</p>
         <div>
           <input type='radio' name='ridetype' value='trip'  className='radiobtn'></input>
           <label>One Way</label>
           <input type='radio' name='ridetype' value='roundtrip' className='radiobtn'></input>
           <label>Round Trip</label>
           <input type='radio' name='ridetype' value='multitrip' className='radiobtn'></input>
           <label>Multi City</label>
         </div>
         
         <div>
           <div className='container2'>
             <p className='ptag'>From: </p>
           <select name='country' className='item1'>
             <option value='Delhi'>Delhi (DEL)</option>
             <option value='hyderabad'>Hyderabad (Hyd)</option>
             <option value='chennai'>chennai (chennai)</option>
           </select>
           <p className='ptag'>To:</p>
           <select name='ToCountry' className='item1'>
             <option>USA</option>
             <option>UK</option>
             <option>canada</option>
           </select>
           </div>
           <div className='container3'>
             <div className='item2'>
               {/* <label className='labeltag'>Departure Time:</label> <br />  */}
               <p>Departure Time:</p>
               <input type='date' name='Time' className='timeinpt'></input><br/>
               <label className='labeltag'>Return Date</label><br/>
               <input type='date' name='returnTime' className='timeinpt'></input>
              </div>
           </div>
           <div className='container4'>
             <div className='item3'>
               <label>Passengers</label><br/>
               <input type='number' name='passengers'></input><br/>
               <label>Pay in(Currency)</label><br/>
               <input type='text' name='pay'></input>
             </div>
           </div>
           <div className='container5'>
             <input type='radio' name='relation' value='armed'></input>
             <label>Armed Forces</label>
             <input type='radio' name='relation' value='family'></input>
             <label>Family</label>
             <input type='radio' name='relation' value='friends'></input>
             <label>Friends</label>
             <input type='radio' name='relation' value='students'></input>
             <label>Students</label>
           </div>
           <div>
             <input type='submit' className='subt' disabled={!isValid} />
           </div>
         </div>
       </form>
    </div>
  );
}

export default FormCont;

