import axios from "axios";


const api = axios.create({
  baseURL: "http://localhost:3001",
});
export const getAllStudent = () => api.get(`/users/getAllStudent`);
const getAllTeachers = () => api.get(`/users/getAllTeachers`).then(response=>response.data);
export const updateUserById = () => api.put(`/users/updateUserById`);
export const deleteUserById = () => api.delete(`/users/deleteUserById`);
export const getUserById = () => api.get(`/users/getUserById`);
//export const insertStudent = (payload) => api.post(`/student`, payload);
export const CreateUser = (payload) => {
  
  return api.post(`/users/register`, payload);
};
export const updateStudentById = (id, payload) =>
  api.put(`/student/${id}`, payload);
export const deleteStudentById = (id) => api.delete(`/student/${id}`);
export const getStudentById = (id) => api.get(`/student/${id}`);
const apis = {
  getAllStudent,
  getAllTeachers,
  updateUserById, //TODO SERVER - ADD IN CONTROLLERS
  deleteUserById, //TODO SERVER - ADD IN CONTROLLERS
  getUserById, //TODO SERVER - ADD IN CONTROLLERS
  CreateUser,
};

export default apis; //proxy/gateway/accessor
