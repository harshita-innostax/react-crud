import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../Components/Data";

const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      console.log(action);
      state.push(action.payload);
    },

    updateUser: (state, action) => {
      const { sno, name, email, number } = action.payload;
      console.log(sno, name);
      const target = state.find((user) => user.sno == sno);
      console.log(target);
      if (target) {
        target.name = name;
        target.email = email;
        target.number = number;
      }
    },

    deleteUser: (state, action) => {
      const { sno } = action.payload;
      const target = state.find((user) => user.sno == sno);

      if (target) {
        return state.filter((f) => f.sno !== sno);
      }
    },
  },
});
export const { addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice;
