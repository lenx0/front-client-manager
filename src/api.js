import axios from "axios";
import { formatDate } from "./utils/dateUtils";

const baseURL = import.meta.env.REACT_APP_API_BASE_URL;
console.log("baseURL", baseURL)
console.log("environment", import.meta.env.MODE)

export const getUsers = async () => {
  try {
    const response = await axios.get(`${baseURL}/list`);
    const usersWithFormattedDates = response.data.map((user, index) => ({
      id: index + 1,
      ...user,
      birthDate: formatDate(user.birthDate),
      moment: formatDate(user.moment),
    }));
    return usersWithFormattedDates;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${baseURL}/create`, userData);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

export const updateUser = async (userId, userData) => {
  try {
    const response = await axios.put(`${baseURL}/update/${userId}`, userData);
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

export const deleteUser = async (userId) => {
  try {
    await axios.delete(`${baseURL}/delete/${userId}`);
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};
