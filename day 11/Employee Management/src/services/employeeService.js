import axios from "axios";

const API_URL = "https://6a4c8355e1cf82a4a17d1f13.mockapi.io/employees";
export const getEmployees = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getEmployeeById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const addEmployee = async (employee) => {
  const response = await axios.post(API_URL, employee);
  return response.data;
};

export const updateEmployee = async (id, employee) => {
  const response = await axios.put(`${API_URL}/${id}`, employee);
  return response.data;
};

export const deleteEmployee = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
const ACTIVITY_URL = "https://6a4c8355e1cf82a4a17d1f13.mockapi.io/activities";

export const getActivities = async () => {
  const response = await axios.get(ACTIVITY_URL);
  return response.data;
};

export const addActivity = async (activity) => {
  const response = await axios.post(ACTIVITY_URL, activity);
  return response.data;
};
