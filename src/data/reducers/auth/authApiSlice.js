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