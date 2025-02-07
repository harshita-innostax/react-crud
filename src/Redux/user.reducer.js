import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//import { userList } from "../components/Data";
import { getAllUsers, addUser, deleteUser, updateUser } from "../api/usersApi";

export const fetchUsers = createAsyncThunk("fetchPosts", async () => {
  const res = await getAllUsers();
  console.log(res.data);
  return res.data;
});

export const addUsers = createAsyncThunk("addUser", async (userData) => {
  const res = await addUser(userData);
  console.log(res);
  return res;
});

export const deleteUsers = createAsyncThunk("deleteUser", async (id) => {
  await deleteUser(id);
});

export const updateUsers = createAsyncThunk("updateUser", async (data) => {
  console.log("from updateUsers: ", data);

  const { id, name, email, number } = data;
  const res = await updateUser(id, { name, email, number });
  console.log(res);
  return {
    id,
    name: res.user.name,
    email: res.user.email,
    number: res.user.number,
  };
});

const userSlice = createSlice({
  name: "usersData",
  initialState: {
    //users: userList,
    users: [],
    selectedUserId: null,
  },

  reducers: {
    /*addUser: (state, action) => {
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
    },*/

    setSelectedUserId: (state, action) => {
      state.selectedUserId = action.payload;
    },
  },

  extraReducers: (builder) => {
    //Fetching all users

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;

      const allData = action.payload;
      console.log(allData);
      /*allData.forEach((dataEntry) => {
        state.users = dataEntry;
        console.log(state.users);
      });*/
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });

    //Adding users

    builder.addCase(addUsers.fulfilled, (state, action) => {
      state.isLoading = false;

      const allData = action.payload;
      console.log({ allData });
      state.users.push(action.payload);
    });
    builder.addCase(addUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addUsers.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });

    // deleting users
    builder.addCase(deleteUsers.fulfilled, (state, action) => {
      console.log(action);
      state.users = state.users.filter(
        (user) => user.id !== action.meta.arg.id
      );
    });

    //updating user
    builder.addCase(updateUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      //const allData = action.payload;
      //console.log({ allData });
      state.users = state.users.map((user) =>
        user.id === action.payload.id
          ? {
              ...user,
              name: action.payload.name,
              email: action.payload.email,
              number: action.payload.number,
            }
          : user
      );
    });
    builder.addCase(updateUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateUsers.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});
// addUser,
export const { setSelectedUserId } = userSlice.actions;
export default userSlice;
