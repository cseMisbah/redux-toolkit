import booksReducer from "../features/books/BooksSlice";
import { configureStore } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const store = configureStore({
  reducer: {
    booksReducer: booksReducer,
  },
});
export default store;
