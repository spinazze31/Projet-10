import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProfile } from "../api/api";

export const userProfile = createAsyncThunk(
  "profile/login",
  async ({ rejectWithValue }) => {
    try {
      const profile = await getProfile();
      return profile;
    } catch (error) {
      const errorMessage = "server inaccessible";
      return rejectWithValue(errorMessage);
    }
  }
);

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    loading: false,
    firstName: null,
    lastName: null,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(userProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.firstName = action.payload;
        state.lastName = action.payload;
        state.error = null;
      })
      .addCase(userProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default profileSlice;
