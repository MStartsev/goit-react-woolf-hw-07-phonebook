import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://646bd4557b42c06c3b2a800c.mockapi.io/';
const RESOURSE = 'contacts';

axios.defaults.baseURL = BASE_URL + RESOURSE;

const getApiData = async ({ mehod, url, data, thunkAPI }) => {
  try {
    const response = await axios[mehod](url, data);

    if (!response.data) throw new Error(response.statusText);

    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => await getApiData({ mehod: 'get', thunkAPI: thunkAPI })
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) =>
    await getApiData({ mehod: 'post', data: contact, thunkAPI: thunkAPI })
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    const { id } = await getApiData({
      mehod: 'delete',
      url: contactId,
      thunkAPI: thunkAPI,
    });

    return id;
  }
);
