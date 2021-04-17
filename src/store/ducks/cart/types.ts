import { Book } from "../books/types";

/**
 * Action types
 */
export enum CartTypes {
  LOAD_SUCCCES = '@cart/LOAD_SUCCCES',

  ADD_SUCCCES = '@cart/ADD_SUCCCES',

  REMOVE_SUCCCES = '@cart/REMOVE_SUCCCES',

  UPDATE_AMOUNT_ADD_SUCCCES = '@cart/UPDATE_AMOUNT_ADD_SUCCCES',

  UPDATE_AMOUNT_REMOVE_SUCCCES = '@cart/UPDATE_AMOUNT_REMOVE_SUCCCES',

}

/**
 * Data types
 */
 export interface ICartItem {
  book: Book;
  amount: number;
}

/**
 * State type
 */
export interface CartState {
  readonly data: ICartItem[]
  readonly loading: boolean
  readonly error: boolean
}
