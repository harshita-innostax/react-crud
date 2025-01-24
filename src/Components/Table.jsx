import React from "react";
import "./Table.css";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
const Table = ({ rows, deleteRow, editRow }) => {
  return (
    <div className="table-wrapper">
      <h1 className="table-title">Employee Entry</h1>
      <table className="table">
        <thead>
          <tr>
            <th>SNo.</th>
            <th className="expand">Name</th>
            <th className="expand">Email</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            return (
              <tr key={idx}>
                <td>{row.sno}</td>
                <td className="expand">{row.name}</td>
                <td>
                  <span>{row.email}</span>
                </td>
                <td>{row.number}</td>
                <td>
                  <span className="actions">
                    <BsFillTrashFill
                      className="delete-btn"
                      onClick={() => deleteRow(idx)}
                    />
                    <BsFillPencilFill onClick={() => editRow(idx)} />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
