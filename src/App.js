import { useState } from 'react';

import './App.css';
import Table from './Components/Table';
import Modal from './Components/Modal';

function App() {
  const [modalopen,setmodalopen]= useState(false);
  const [rows,setRows]=useState([
    {sno:'1',name:'Harshita',email:"harshita.gupta@innostax.com",number:"8595848067"},
    {sno:'2',name:'Aditya',email:"aditya.singh@innostax.com",number:"9995848067"}
  ]);

  const [rowToEdit,setRowToEdit]=useState(null)

  const handledeleterow = (targetIndex) => {
    setRows(rows.filter((_,idx) => idx!== targetIndex));
  }
  const handleEditRow=(idx)=>{
    setRowToEdit(idx);
    setmodalopen(true);
  };
  const handleSubmit= (newRow)=>{
    console.log(newRow);
    rowToEdit === null?
    setRows([...rows,newRow]) :
    setRows(rows.map((currRow,idx) => {
      if(idx !== rowToEdit) return currRow;
      return newRow;
    })
  );
  }


  return (
  <div className='App'>
    <Table rows={rows} deleteRow={handledeleterow} editRow={handleEditRow}/>
    <button className='btn' onClick={()=>setmodalopen(true)}>Add</button>
    {modalopen && (
      <Modal 
        closemodal={()=> {
          setmodalopen(false);
          setRowToEdit(null);
        }}
        onSubmit={handleSubmit}
        defaultValue={rowToEdit !== null && rows[rowToEdit]}/>
    )}
  </div>
  );  
}

export default App;
