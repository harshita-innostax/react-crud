import React,{useState} from 'react'
import "./Modal.css";
const Modal = ({closemodal, onSubmit, defaultValue}) => {

  const [formState,setformState]= useState(defaultValue || {
    sno: "",
    name: "",
    email: "",
    number: ""
  });

  const [errors,setErrors]= useState("");
  const validateForm=()=>{
    if(formState.sno && formState.name && formState.email && formState.number){
      setErrors("")
      return true;
    } else{
      let errorFields=[];
      for(const [key,value] of Object.entries(formState)){
        if(!value){
          errorFields.push(key)
        }
      }
      setErrors(errorFields.join(","));
      return false;
    }
  }
  const handleChange=(e) =>{
    setformState({
      ...formState,
      [e.target.name]: e.target.value});
  };

 const handleSubmit= (e)=> {
  e.preventDefault();
  console.log(formState);

  if(!validateForm()) return;
  onSubmit(formState); 
  closemodal();
 };
 



  return (
    <div className='modal-container' onClick={(e)=>{
        if(e.target.className==="modal-container")closemodal()
        }}>
      <div className='modal'>
        <form>
            <div className='form-grp'>
                <label htmlFor='sno' className='labelstyle'>Sno</label>
                <input name='sno' value={formState.sno} onChange={handleChange}/>
            </div>
            <div className='form-grp'>
                <label htmlFor='name' className='labelstyle'>Name</label>
                <input name='name' value={formState.name} onChange={handleChange}/>
            </div>
            <div className='form-grp'>
                <label htmlFor='email' className='labelstyle'>Email</label>
                <input name='email' value={formState.email} onChange={handleChange}/>
            </div>
            <div className='form-grp'>
                <label htmlFor='number' className='labelstyle'>Number</label>
                <input name='number' value={formState.number} onChange={handleChange}/>
            </div>
            {errors && <div className='error'>{`Please Include: ${errors}`}</div>}
            <button type='submit' className='btn' onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Modal
