import { combineReducers } from 'redux';

import catalog from './pizzas';
import cart from './cart';
import { reducer as reduxFormReducer } from 'redux-form'
const rootReducer = combineReducers({
  pizzas: catalog,
  cart,
  form: reduxFormReducer
});

export default rootReducer;
