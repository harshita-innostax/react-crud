import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:8000/api",
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getPost = () => {
  return api.get("/posts");
};

export const deletePost = async (id) => {
  await api.delete(`/posts/${id}`);
  return id;
};

export const updatePost = async (id, updatedData) => {
  const res = await api.put(`/posts/${id}`, updatedData);
  return res.data;
};
