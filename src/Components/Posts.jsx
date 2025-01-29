import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, deletePosts } from "../Redux/post.reducer";

export const Posts = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;

  const handleDelete = async (id) => {
    dispatch(deletePosts(id));
  };

  return (
    <section>
      <ul>
        {data.map((currElem) => {
          const { id, body, title } = currElem;
          return (
            <li key={id}>
              <p>{title}</p>
              <p>{body}</p>
              <button>Edit</button>
              <button onClick={() => handleDelete(id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
