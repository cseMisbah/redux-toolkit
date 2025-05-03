import CounterReducer from "../features/counter/CounterSlice";
import { configureStore } from "@reduxjs/toolkit";

//instead of using createStore now we need to use configure store for redux-toolkit
// and in configure store we can keep the reducers as object but in this way
//we have to store the reducers in reducers property
const store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
});
export default store;
