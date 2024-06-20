import { createSlice } from '@reduxjs/toolkit';
import { login } from './authApiSlice';
import { validateToken } from './authApiSlice';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    status: 'idle',
    tokenStatus: 'idle',
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      state.user = null;
      state.status = 'idle';
      state.tokenStatus = 'idle';
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
      })
      .addCase(validateToken.pending, (state) => {
        state.tokenStatus = 'loading';
      })
      .addCase(validateToken.fulfilled, (state, action) => {
        state.tokenStatus = 'succeeded';
        if (action.payload != null && action.payload.user) {
          state.user = action.payload.user;
        }
        state.error = null;
      })
      .addCase(validateToken.rejected, (state) => {
        state.tokenStatus = 'failed';
        state.error = 'token invalido';
        state.user = null;
      });
  },
});

export const { setUser, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
