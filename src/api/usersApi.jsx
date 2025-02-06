import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
  // baseURL: "https://jsonplaceholder.typicode.com",
});

export const getAllUsers = () => {
  return api.get("/users");
};

export const addUser = async (data) => {
  const res = await api.post(`/user`, data);
  return res.data;
};

export const deleteUser = async (id) => {
  await api.delete(`/user/${id}`);
  return id;
};

export const updateUser = async (id, updatedData) => {
  const res = await api.put(`/user/${id}`, updatedData);
  return res.data;
};
