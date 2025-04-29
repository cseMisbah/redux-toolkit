const { createStore, combineReducers } = require("redux");

//products constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";

//product state
const initialProductState = {
  products: ["sugar", "salt"],
  numberOfProducts: 2,
};

//product action
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};

const addProduct = (product) => {
  return {
    type: ADD_PRODUCTS,
    payload: product,
  };
};

//productReducer

const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCTS:
      return {
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };
    default:
      return state;
  }
};

//store(we can keep just one reducer in a store)
/*
const store = createStore(productReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProduct("pen"));

*/

//cart constants
const GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_CART_ITEM = "ADD_CART_ITEM";

//cart state

const initialCartState = {
  cart: ["sugar"],
  numberOfProducts: 1,
};

//cart action

const getCart = () => {
  return {
    type: GET_CART_ITEMS,
  };
};

const addCart = (product) => {
  return {
    type: ADD_CART_ITEM,
    payload: product,
  };
};

//cartReeducer

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case GET_CART_ITEMS:
      return {
        ...state,
      };
    case ADD_CART_ITEM:
      return {
        cart: [...state.cart, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  productR: productReducer,
  cartR: cartReducer,
});

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProduct("pen"));

store.dispatch(getCart());
store.dispatch(addCart("Buiscit"));

//
