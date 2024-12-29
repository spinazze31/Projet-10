import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../api/api";

export const userConnection = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const token = await api(credentials);
      return token;
    } catch (error) {
      const errorMessage = "Identifiant ou mot de passe incorrect";
      return rejectWithValue(errorMessage);
    }
  }
);

export const userSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    token: null,
    error: null,
  },

  reducers: {
    logout: (state) => {
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userConnection.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userConnection.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
      })
      .addCase(userConnection.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice;
