import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user.reducer";
import postSlice from "./post.reducer";

const store = configureStore({
  reducer: {
    usersData: userSlice.reducer,
    post: postSlice.reducer,
  },
});

export default store;
