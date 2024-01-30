import React, { useState } from 'react';
import "./Model.css"

function Model()
{
    const[isOpen, setIsOpen] = useState(false);
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dob, setDob] = useState('')

    const openModal =() => {
        setIsOpen(true);
    }

    const closeModal =() => {
        setIsOpen(false);
    }
   
     const handleSubmit =(e) => {
        e.preventDefault();
          if (e.target[2].value.length < 10) {
            alert('Invalid phone number. Please enter a 10-digit phone number.');
            return;
          }
      
         
      
          if (new Date(e.target[3].value) > new Date()) {
            alert('Invalid date of birth. Date of birth cannot be in the future.');
            return;
          }
          setUsername('');
          setEmail('');
          setPhone('');
          setDob('');
          setIsOpen(false);
     }

    return(
        <div>
          <div onClick={closeModal}></div>
            <h1>User Details Modal</h1>
             <button className='button' onClick={openModal}>Open Form</button>

             {isOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} >
            <h2>Fill Details</h2>
            <form onSubmit={handleSubmit} >
                <div className='form-group'>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              </div>


              <div className='form-group'>
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              </div>
              

              <div className='form-group'>
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="number"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              </div>


              <div className='form-group'>
              <label htmlFor="dob">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />
               </div>

              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
        </div>
    )
}
export default Model;