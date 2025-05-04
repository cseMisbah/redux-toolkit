import postReducer from "../src/features/posts/PostSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});
export default store;
