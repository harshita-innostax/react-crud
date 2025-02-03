import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deletePost, getPost, updatePost } from "../api/postApi";

export const fetchPosts = createAsyncThunk("fetchPosts", async () => {
  const res = await getPost();
  console.log(res.data);
  return res.data;
});

export const deletePosts = createAsyncThunk("deletePosts", async (id) => {
  await deletePost(id);
});

export const updatePosts = createAsyncThunk("updatePosts", async (request) => {
  const { id, body } = request;
  const res = await updatePost(id, body);
  console.log(res);
  return res;
});

const postSlice = createSlice({
  name: "post",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });

    builder.addCase(deletePosts.fulfilled, (state, action) => {
      console.log(action);
      state.data = state.data.filter((posts) => posts.id !== action.meta.arg);
    });

    builder.addCase(updatePosts.fulfilled, (state, action) => {
      state.isLoading = false;
      const targetIndex = state.data.findIndex(
        (posts) => posts.id === action.meta.arg
      );
      if (targetIndex !== -1) {
        console.log(state);
        state.data = action.meta.arg.updatedData;
      }
    });
    builder.addCase(updatePosts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updatePosts.rejected, (state, action) => {
      console.log("Error", action);
      state.isError = true;
    });
  },
});

export default postSlice;
