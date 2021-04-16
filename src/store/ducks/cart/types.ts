/**
 * Action types
 */
export enum CartTypes {
  LOAD_REQUEST = '@cart/LOAD_REQUEST',
  LOAD_SUCCCES = '@cart/LOAD_SUCCCES',
  LOAD_FAILURE = '@cart/LOAD_FAILURE',

  ADD_REQUEST = '@cart/ADD_REQUEST',
  ADD_SUCCCES = '@cart/ADD_SUCCCES',
  ADD_FAILURE = '@cart/ADD_FAILURE',

  REMOVE_REQUEST = '@cart/REMOVE_REQUEST',
  REMOVE_SUCCCES = '@cart/REMOVE_SUCCCES',
  REMOVE_FAILURE = '@cart/REMOVE_FAILURE',

  UPDATE_AMOUNT_ADD_REQUEST = '@cart/UPDATE_AMOUNT_ADD_REQUEST',
  UPDATE_AMOUNT_ADD_SUCCCES = '@cart/UPDATE_AMOUNT_ADD_SUCCCES',
  UPDATE_AMOUNT_ADD_FAILURE = '@cart/UPDATE_AMOUNT_ADD_FAILURE',

  UPDATE_AMOUNT_REMOVE_REQUEST = '@cart/UPDATE_AMOUNT_REMOVE_REQUEST',
  UPDATE_AMOUNT_REMOVE_SUCCCES = '@cart/UPDATE_AMOUNT_REMOVE_SUCCCES',
  UPDATE_AMOUNT_REMOVE_FAILURE = '@cart/UPDATE_AMOUNT_REMOVE_FAILURE',

}

/**
 * Data types
 */
export interface Item {
  id: number,
  author: string,
  title: string,
  description: string,
  image_url: string,
  price: number,
  prince_discount: number,
  stars: number,
  review: number,
  amount: number
}

/**
 * State type
 */
export interface CartState {
  readonly data: Item[]
  readonly loading: boolean
  readonly error: boolean
}
