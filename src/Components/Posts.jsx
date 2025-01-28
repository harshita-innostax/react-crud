import { useEffect, useState } from "react";
import { getPost } from "../api/postApi";

export const Posts = () => {
  const [data, setData] = useState([]);

  const getPostData = async () => {
    const res = await getPost();
    console.log(res.data);
    setData(res.data);
  };

  useEffect(() => {
    getPostData();
  }, []);

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
              <button>Delete</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
