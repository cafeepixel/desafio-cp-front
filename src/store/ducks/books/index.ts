import { Reducer } from 'redux';
import { BooksState, BooksTypes, BooksTypes_ } from './types';

const INITIAL_STATE: BooksState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<BooksState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BooksTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case BooksTypes.LOAD_SUCCCES:
      return {
      ...state, loading: false, error: false, data: action.payload.data,
      };
    case BooksTypes.LOAD_FAILURE:
      return {
      ...state, loading: false, error: true, data: [],
      };

    case BooksTypes.LOAD_FOR_CATEGORY_REQUEST:
      return { ...state, loading: true };
    case BooksTypes.LOAD_FOR_CATEGORY_SUCCCES:
      return {
      ...state, loading: false, error: false, data: action.payload.data,
      };
    case BooksTypes.LOAD_FOR_CATEGORY_FAILURE:
      return {
      ...state, loading: false, error: true, data: [],
      };

    case BooksTypes_.LOAD_FOR_TITLE_REQUEST:
      return { ...state, loading: true };
    case BooksTypes_.LOAD_FOR_TITLE_SUCCCES:
      return {
      ...state, loading: false, error: false, data: action.payload.data,
      };
    case BooksTypes_.LOAD_FOR_TITLE_FAILURE:
      return {
      ...state, loading: false, error: true, data: [],
      };
    default:
      return state;
  }
};

export default reducer;
