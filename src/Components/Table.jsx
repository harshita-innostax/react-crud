import React from 'react'
import "./Table.css"
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs'
const Table = ({rows}) => {
  return (
    <div className='table-wrapper'>
        <table className='table'>
            <thead>
                <tr>
                    <th>SNo.</th>
                    <th className='expand'>Name</th>
                    <th className='expand'>Email</th>
                    <th>Phone Number</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    rows.map((row,idx)=> {
                        return <tr key={idx}>
                            <td>{row.sno}</td>
                            <td>{row.name}</td>
                            <td><span>{row.email}</span></td>
                            <td>{row.number}</td>
                        </tr>
                    })
                }

            </tbody>

        </table>
      
    </div>
  )
}

export default Table
