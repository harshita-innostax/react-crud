import { useState } from 'react';

import './App.css';
import Table from './Components/Table';
import Modal from './Components/Modal';



function App() {
  const [modalopen,setmodalopen]= useState(false);
  const rows=[
    {sno:'1',name:'Harshita',email:"harshita.gupta@innostax.com",number:"8595848067"},
    {sno:'2',name:'Aditya',email:"aditya.singh@innostax.com",number:"9995848067"}
  ];
  return (
  <div className='App'>
    <Table rows={rows}/>
    <button className='btn' onClick={()=>setmodalopen(true)}>Add</button>
    {modalopen && <Modal closemodal={()=> setmodalopen(false)}/>}
  </div>
  );  
}

export default App;
