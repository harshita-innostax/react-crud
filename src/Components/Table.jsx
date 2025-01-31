import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import { deleteUser, setSelectedUserId } from "../Redux/user.reducer";
import { selectUsers } from "../Redux/user.selectors";
import "./Table.css";

const Table = () => {
  const users = useSelector(selectUsers);
  console.log(users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (sno) => {
    console.log("handleDelete is called");
    dispatch(deleteUser({ sno }));
  };

  const handleEdit = (sno) => {
    dispatch(setSelectedUserId(sno));
    navigate(`/register/${sno}`);
  };

  return (
    <div className="table-wrapper table-border">
      <h1 className="table-title">Employee Entry</h1>
      <table className="table">
        <thead>
          <tr>
            <th className="expand">Name</th>
            <th className="expand">Email</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.sno}>
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
                    <BsFillPencilFill onClick={() => handleEdit(user.sno)} />
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
