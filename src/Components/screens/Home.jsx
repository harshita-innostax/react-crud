import Table from "../organisms/Table";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedUserId } from "../../redux/user.reducer";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddUser = () => {
    dispatch(setSelectedUserId(null));
    navigate("/register");
  };
  const handleUploadFiles = () => {
    navigate("/uploadfiles");
  };
  const viewApiData = () => {
    navigate("/api");
  };

  return (
    <>
      <div>
        <div>
          <Table />
        </div>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-6 mt-6 mr-6 rounded"
            onClick={handleAddUser}
          >
            Add
          </button>
          <button
            className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-6 mt-6  mr-6 rounded"
            onClick={handleUploadFiles}
          >
            Upload Files
          </button>
          <button
            className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-6 mt-6 rounded"
            onClick={viewApiData}
          >
            Fetch Data
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
