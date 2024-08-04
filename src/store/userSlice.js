import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:8080/users', userData);

      return response.data;
    } catch (error) {

      return rejectWithValue(error.response.data);
    }
  }
);
export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (credentials, { rejectWithValue }) => {
      try {
        const response = await axios.post('http://localhost:8080/login', credentials);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

  const initialState = {
    user: null,
    isLoggedIn: false,
    loading: false,
    error: null,
  };
  
  const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      logoutUser: (state) => {
        state.user = null;
        state.isLoggedIn = false;
        localStorage.removeItem('user');
      },
      loadUserFromLocalStorage: (state) => {
        const user = localStorage.getItem('user');
        if (user) {
          state.user = JSON.parse(user);
          state.isLoggedIn = true;
        }
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(registerUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(registerUser.fulfilled, (state, action) => {
          state.loading = false;
          state.user = action.payload;
          state.isLoggedIn = true;
          localStorage.setItem('user', JSON.stringify(action.payload));
        })
        .addCase(registerUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload || 'Ошибка регистрации';
        })
        .addCase(loginUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          state.loading = false;
          state.user = action.payload;
          state.isLoggedIn = true;
          localStorage.setItem('user', JSON.stringify(action.payload));
        })
        .addCase(loginUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload || 'Ошибка входа';
        });
    },
  });
  
  export const { logoutUser, loadUserFromLocalStorage } = userSlice.actions;
  export default userSlice.reducer;