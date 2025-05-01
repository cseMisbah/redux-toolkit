import counterReducer from "../reducers/CounterReducer";
import { createStore } from "redux";

const store = createStore(counterReducer);
export default store;
