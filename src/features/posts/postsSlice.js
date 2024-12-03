import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts, addPost, deletePost, fetchPostDetails } from "../../network/postsApis";
export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    postDetails: null,
    status: "idle",
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder 
    .addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.posts = action.payload;
    })
    .addCase(addPost.fulfilled, (state, action) => {
      state.posts.push(action.payload);
    })
    .addCase(deletePost.fulfilled, (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    })
    .addCase(fetchPostDetails.fulfilled, (state, action) => {
      state.postDetails = action.payload;
    })
  },
});
export { fetchPosts, addPost, deletePost, fetchPostDetails}; 
export default postsSlice.reducer;
