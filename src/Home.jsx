import Table from "./Components/Table";
import "./App.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Table />
      <button className="btn" onClick={() => navigate("/register")}>
        Add
      </button>
    </div>
  );
}

export default Home;
