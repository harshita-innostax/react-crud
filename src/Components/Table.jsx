import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import { deleteUser, setSelectedUserId } from "../Redux/user.reducer";
import { selectUsers } from "../Redux/user.selectors";

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
    <>
      <h1 className="flex justify-center text-4xl font-bold pt-28 pb-20 font-sans">
        Employee Table
      </h1>
      <div className="flex justify-center relative overflow-x-auto table-auto ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-12 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr
                  key={user.sno}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                >
                  <td
                    //scope="row"
                    className="px-10 py-4 font-medium text-lg whitespace-nowrap text-gray-900  dark:text-white"
                  >
                    {user.name}
                  </td>
                  <td className="px-6 py-4 text-lg text-gray">
                    <span>{user.email}</span>
                  </td>
                  <td className="px-6 py-4 text-lg">{user.number}</td>
                  <td className="px-6 py-4">
                    <span>
                      <div className="flex gap-5">
                        <BsFillTrashFill
                          className=" text-red-500 hover:text-red-700 cursor-pointer text-lg cursor-pointer"
                          onClick={() => handleDelete(user.sno)}
                        />
                        <BsFillPencilFill
                          className="text-blue-500 hover:text-blue-700 cursor-pointer text-lg cursor-pointer"
                          onClick={() => handleEdit(user.sno)}
                        />
                      </div>
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
