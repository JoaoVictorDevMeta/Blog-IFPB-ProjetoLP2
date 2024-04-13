import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk(
  'auth/log-in',
  async ({ email, password }) => {
    const response = await axios({
      method: 'post',
      url: '/api/auth/log-in',
      data: { email, password },
      withCredentials: true,
    });
    return response.data;
  }
);

export const validateToken = createAsyncThunk(
  'auth/validateToken',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/auth/validate-token', { withCredentials: true });
      return response.data;
    } catch (err) {
      return rejectWithValue({
        message: err.message, // or err.response?.data?.error depending on your error structure
        status: err.response?.status
      });
    }
  }
);