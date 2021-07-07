import { combineReducers } from 'redux';

import books from './books';
import categories from './categories';
import cart from './cart';

export default combineReducers({
  books,
  categories,
  cart
});
