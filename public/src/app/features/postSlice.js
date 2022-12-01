import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    value: [],
  },
  reducers: {
    addPost: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addPost } = postSlice.actions;
export const selectPost = (state) => state.post.value;
export default postSlice.reducer;
