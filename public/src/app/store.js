import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./features/postSlice";
import formReducer from "./features/formSlice";

export default configureStore({
  reducer: {
    post: postReducer,
    form: formReducer,
  },
});
