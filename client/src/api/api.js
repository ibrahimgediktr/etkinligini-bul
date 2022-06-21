import axios from "axios";

const BASE = process.env.REACT_APP_BASE_ENDPOINT;

export const fetchEvents = async () => {
  try {
    const { data } = await axios.get(`${BASE}/events`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchSingleEvent = async (id) => {
  try {
    const { data } = await axios.get(`${BASE}/events/${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchCategories = async () => {
  try {
    const { data } = await axios.get(`${BASE}/categories`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchCategoryEvents = async (id) => {
  try {
    const { data } = await axios.get(`${BASE}/categories/${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const postRegister = async (input) => {
  try {
    const { data } = await axios.post(`${BASE}/users/register`, input);
    return data;
  } catch (error) {
    console.error(error);
  }
};
