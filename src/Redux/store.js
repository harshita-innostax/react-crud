import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userReducer";

const store = configureStore({
  reducer: {
    users: userSlice.reducer,
  },
});

export default store;
