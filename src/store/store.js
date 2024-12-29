import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../Reducer/reducer";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
