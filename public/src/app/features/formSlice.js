import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    value: ["Alfonso"],
  },
  reducers: {
    changeUserName: (state, action) => {
      state.value = [action.payload];
    },
  },
});

export const { changeUserName } = formSlice.actions;
export const userName = (state) => state.form.value;
export default formSlice.reducer;
