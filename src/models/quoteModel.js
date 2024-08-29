import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const fetchQuotes = async () => {
  try {
    const response = await axios.get(`${API_URL}/quotes`);
    return response.data;
  } catch (error) {
    console.error('Error fetching quotes', error);
    throw error;
  }
};

export const getQuoteById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/quote/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching quotes', error);
    throw error;
  }
};

export const saveQuote = async (quote) => {
  try {
    const response = await axios.post(`${API_URL}/save`, quote);
    return response.data;
  } catch (error) {
    console.error('Error saving quote', error);
    throw error;
  }
};

export const updateQuote = async (id, updatedQuote) => {
  try {
    const response = await axios.put(`${API_URL}/update/${id}`, updatedQuote);
    return response.data;
  } catch (error) {
    console.error('Error saving quote', error);
    throw error;
  }
};

export const deleteQuote = async (id) => {
  try {
    await axios.delete(`${API_URL}/delete/${id}`);
  } catch (error) {
    console.error('Error fetching quotes', error);
    throw error;
  }
};
