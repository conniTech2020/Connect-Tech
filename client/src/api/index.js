import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});
export const getAllUsers = () => api.get(`/`);

//export const insertStudent = (payload) => api.post(`/student`, payload);
export const registerUser = (payload) => {
  debugger;
  return api.post(`/users/register`, payload);
};
export const updateStudentById = (id, payload) =>
  api.put(`/student/${id}`, payload);
export const deleteStudentById = (id) => api.delete(`/student/${id}`);
export const getStudentById = (id) => api.get(`/student/${id}`);
const apis = {
  getAllUsers,
  updateStudentById,
  deleteStudentById,
  getStudentById,
  registerUser,
};

export default apis; //proxy/gateway/accessor
