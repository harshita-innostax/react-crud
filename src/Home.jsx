import { useState } from "react";
import Table from "./Components/Table";
import "./App.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const [rows, setRows] = useState([
    {
      sno: "1",
      name: "Harshita",
      email: "harshita.gupta@innostax.com",
      number: "8595848067",
    },
    {
      sno: "2",
      name: "Aditya",
      email: "aditya.singh@innostax.com",
      number: "9995848067",
    },
  ]);
  const [rowToEdit, setRowToEdit] = useState(null);
  const handleSubmit = (newRow) => {
    console.log(newRow);
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;
            return newRow;
          })
        );
  };
  const handledeleterow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };
  const handleEditRow = (idx) => {
    setRowToEdit(idx);
  };
  const navigate = useNavigate();
  return (
    <div className="App">
      <Table rows={rows} deleteRow={handledeleterow} editRow={handleEditRow} />
      <button className="btn" onClick={() => navigate("/register")}>
        Add
      </button>
    </div>
  );
}

export default Home;
