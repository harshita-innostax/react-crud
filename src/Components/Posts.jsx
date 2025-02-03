import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, deletePosts, updatePosts } from "../Redux/post.reducer";
import ConfirmDelete from "./ConfirmDelete";

export const Posts = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.post);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;

  const handleOnDelete = (item) => {
    console.log("called", item.id);
    setSelectedItem(item);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };
  const confirmDelete = () => {
    if (selectedItem) {
      dispatch(deletePosts(selectedItem.id));
    }
    closeModal();
  };

  const handleUpdate = async (id, body) => {
    dispatch(updatePosts({ id, body }));
  };

  return (
    <div
      className="grid grid-cols-2 md:grid-cols-4 gap-3 flex-wrap mt-7 ml-2 mr-2 bg-gradient-to-b 
    from-gray-350 
    to-gray-400"
    >
      {data.map((currElem) => {
        const { id, body, title } = currElem;

        return (
          <div
            key={id}
            className=" shadow-md border rounded-lg flex flex-col h-full"
          >
            <div className="font-bold text-xl mb-2">{title}</div>
            <div className="text-white-700 text-base flex-grow">{body}</div>
            <div className="flex justify-between mt-auto">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 mt-4 mr-3 rounded"
                onClick={() => handleUpdate(id, body)}
              >
                Update
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 mt-4 rounded"
                onClick={() => handleOnDelete(currElem)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}

      <ConfirmDelete
        isOpen={isModalOpen}
        onClose={closeModal}
        onDelete={confirmDelete}
      />
    </div>
  );
};
