import React from 'react'
import "./Modal.css";
const Modal = ({closemodal}) => {
  return (
    <div className='modal-container' onClick={(e)=>{
        if(e.target.className==="modal-container")closemodal()
        }}>
      <div className='modal'>
        <form>
            <div className='form-grp'>
                <label htmlFor='sno' className='labelstyle'>SNo.</label>
                <input name='SNo.'/>
            </div>
            <div className='form-grp'>
                <label htmlFor='Name' className='labelstyle'>Name</label>
                <input name='Name'/>
            </div>
            <div className='form-grp'>
                <label htmlFor='Email' className='labelstyle'>Email</label>
                <input name='Email'/>
            </div>
            <div className='form-grp'>
                <label htmlFor='Number' className='labelstyle'>Number</label>
                <input name='Number'/>
            </div>
            <button type='submit' className='btn'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Modal
