const { createStore } = require("redux");

//defining constants

const INCREMENT = "INCREMENT";
//const DECREMENT = "DECREMENT";
//const ADD_USER = "ADD_USER";
//const INCREMENT_COUNTER_BY_VALUE = "INCREMENT_COUNTER_BY_VALUE ";
const ADD_USER = "ADD_USER";
/*
//state
const initialCounterState = {
  count: 0,
};
*/
const initialCounterState = {
  users: ["karim"],
  count: 1,
};

const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

/*
const initialUsersState = {
  users: [{ name: "karim" }],
};
*/

//action - Object - (type,payload)
//INCREMENT COUNTER
//DECREMENT COUNTER

const userReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        users: [...state.users, action.payload],
        count: state.count + 1,
      };
    default:
      state;
  }
};
const store = createStore(userReducer);

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(addUser("Rafique"));
store.dispatch(addUser("Salma"));
/*
const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case INCREMENT_COUNTER_BY_VALUE:
      return {
        ...state,
        count: state.count + action.payload,
      };
    default:
      state;
  }
};

const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};
const incrementCounterByValue = (value) => {
  return {
    type: INCREMENT_COUNTER_BY_VALUE,
    payload: value,
  };
};
*/
//create reducer for counter
/*
const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case INCREMENT_COUNTER_BY_VALUE:
      return {
        ...state,
        count: state.count + action.payload,
      };
    default:
      state;
  }
};
*/
//store - getState(),dispatch(),subscribe()
/*
const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});
*/

//store.dispatch(incrementCounter());
//store.dispatch(incrementCounter());
//store.dispatch(incrementCounter());
//store.dispatch(decrementCounter());
//store.dispatch(incrementCounterByValue(5));
//store.dispatch(incrementCounterByValue(10));
/*
const addUser = (user) => {
  return {
    type: "ADD_USER",
    //payload: { name: "Bokkor" },
    payload: user,
  };
};
*/
/*
const { createStore } = require("redux");

const initialState = {
  count: 0,
};

//define constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

const IncrementCounterAction = () => {
  return {
    type: INCREMENT,
  };
};

const decrementCounterAction = () => {
  return {
    type: DECREMENT,
  };
};

const resetCounterAction = () => {
  return {
    type: RESET,
  };
};

//creating reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };
    default:
      state;
  }
};

const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(IncrementCounterAction());
store.dispatch(IncrementCounterAction());
store.dispatch(IncrementCounterAction());
store.dispatch(decrementCounterAction());
store.dispatch(resetCounterAction());
*/
