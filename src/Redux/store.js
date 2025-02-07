import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user.reducer";

const store = configureStore({
  reducer: {
    usersData: userSlice.reducer,
  },
});

export default store;
