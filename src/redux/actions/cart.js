export const ADD_PIZZA_CART = 'ADD_PIZZA_CART';
export const SET_DATA_TO_CART = 'SET_DATA_TO_CART';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
export const PLUS_CART_ITEM = 'PLUS_CART_ITEM';
export const MINUS_CART_ITEM = 'MINUS_CART_ITEM';
export const CHANGE_COUNTER = 'CHANGE_COUNTER';
export const CLEAR_CART = 'CLEAR_CART'

export const addPizzaToCart = (obj) => ({
  type: ADD_PIZZA_CART,
  payload: obj,
});

export const setDataToCart = (arr) => ({
  type: SET_DATA_TO_CART,
  payload: arr,
});

export const removeCartItem = (id) => ({
  type: REMOVE_CART_ITEM,
  payload: id,
});

export const plusCartItem = (id) => ({
  type: PLUS_CART_ITEM,
  payload: id,
});

export const minusCartItem = (id) => ({
  type: MINUS_CART_ITEM,
  payload: id,
});

export const changeCounter = (obj) => ({
  type: CHANGE_COUNTER,
  payload: obj,
});
export const clearCart = () => ({
  type: CLEAR_CART,
});