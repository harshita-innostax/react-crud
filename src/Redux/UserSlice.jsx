import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser(state, action) {},
    removeUser(state, action) {},
    deleteUser(state, action) {},
  },
});
console.log(userSlice.action);
export default userSlice.reducer;
