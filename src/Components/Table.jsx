import React from "react";
import "./Table.css";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../Redux/userReducer";
import { Link } from "react-router-dom";

const Table = ({ editRow }) => {
  const users = useSelector((state) => state.users);
  console.log(users);
  const dispatch = useDispatch();

  const handleDelete = (sno) => {
    console.log("handleDelete is called");
    dispatch(deleteUser({ sno: sno }));
  };

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
          {users.map((user, idx) => {
            return (
              <tr key={idx}>
                <td>{user.sno}</td>
                <td className="expand">{user.name}</td>
                <td>
                  <span>{user.email}</span>
                </td>
                <td>{user.number}</td>
                <td>
                  <span className="actions">
                    <BsFillTrashFill
                      className="delete-btn"
                      onClick={() => handleDelete(user.sno)}
                    />
                    <Link to={`/edit/${user.sno}`}>
                      <BsFillPencilFill />
                    </Link>
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
