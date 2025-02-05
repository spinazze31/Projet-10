import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../Reducer/login-reducer";
import { profileSlice } from "../Reducer/profile-reducer";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    profile: profileSlice.reducer,
  },
});
