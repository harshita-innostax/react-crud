import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../components/Data";

const userSlice = createSlice({
  name: "usersData",
  initialState: {
    users: userList,
    selectedUserId: null,
  },

  reducers: {
    addUser: (state, action) => {
      console.log(action);
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    },

    updateUser: (state, action) => {
      const { sno, name, email, number } = action.payload;
      console.log(sno, name);
      const updatedUsers = state.users.map((user) => {
        if (user.sno === sno) {
          return {
            name,
            email,
            number,
            sno,
          };
        }
        return user;
      });
      state.users = updatedUsers;
    },

    deleteUser: (state, action) => {
      const { sno } = action.payload;
      const target = state.users.find((user) => user.sno === sno);

      if (target) {
        return {
          ...state,
          users: state.users.filter((f) => f.sno !== sno),
        };
      }
    },

    setSelectedUserId: (state, action) => {
      state.selectedUserId = action.payload;
    },
  },
});
export const { addUser, deleteUser, updateUser, setSelectedUserId } =
  userSlice.actions;
export default userSlice;
