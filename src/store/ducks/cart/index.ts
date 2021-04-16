import { Reducer } from 'redux';
import { CartState, CartTypes } from './types';

const INITIAL_STATE: CartState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<CartState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case CartTypes.LOAD_SUCCCES:
      return {
      ...state, loading: false, error: false, data: action.payload.data,
      };
    case CartTypes.LOAD_FAILURE:
      return {
      ...state, loading: false, error: true, data: [],
      };

      case CartTypes.ADD_REQUEST:
        return { ...state, loading: true };
      case CartTypes.ADD_SUCCCES:
        return {
        ...state, loading: false, error: false, data: action.payload.data,
        };
      case CartTypes.ADD_FAILURE:
        return {
        ...state, loading: false, error: true, data: [],
        };

      case CartTypes.LOAD_REQUEST:
        return { ...state, loading: true };
      case CartTypes.LOAD_SUCCCES:
        return {
        ...state, loading: false, error: false, data: action.payload.data,
        };
      case CartTypes.LOAD_FAILURE:
        return {
        ...state, loading: false, error: true, data: [],
        };

      case CartTypes.REMOVE_REQUEST:
        return { ...state, loading: true };
      case CartTypes.REMOVE_SUCCCES:
        return {
        ...state, loading: false, error: false, data: action.payload.data,
        };
      case CartTypes.REMOVE_FAILURE:
        return {
        ...state, loading: false, error: true, data: [],
        };


      case CartTypes.UPDATE_AMOUNT_ADD_REQUEST:
        return { ...state, loading: true };
      case CartTypes.UPDATE_AMOUNT_ADD_SUCCCES:
        return {
        ...state, loading: false, error: false, data: action.payload.data,
        };
      case CartTypes.UPDATE_AMOUNT_ADD_FAILURE:
        return {
        ...state, loading: false, error: true, data: [],
        };

      
        case CartTypes.UPDATE_AMOUNT_REMOVE_REQUEST:
          return { ...state, loading: true };
        case CartTypes.UPDATE_AMOUNT_REMOVE_SUCCCES:
          return {
          ...state, loading: false, error: false, data: action.payload.data,
          };
        case CartTypes.UPDATE_AMOUNT_REMOVE_FAILURE:
          return {
          ...state, loading: false, error: true, data: [],
          };
    default:
      return state;
  }
};

export default reducer;
