import Table from "./Components/Table";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedUserId } from "./Redux/user.reducer";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddUser = () => {
    dispatch(setSelectedUserId(null));
    navigate("/register");
  };

  return (
    <div className="App">
      <Table />
      <button className="btn" onClick={handleAddUser}>
        Add
      </button>
    </div>
  );
}

export default Home;
