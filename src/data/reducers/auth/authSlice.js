import { createSlice } from '@reduxjs/toolkit';
import { login } from './authApiSlice';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state) => {
        state.user = null;
        state.status = 'idle';
        state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setUser, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user