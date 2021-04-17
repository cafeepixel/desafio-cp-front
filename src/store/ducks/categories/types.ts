/**
 * Action types
 */
export enum CategoriesTypes {
  LOAD_REQUEST = '@categories/LOAD_REQUEST',
  LOAD_SUCCCES = '@categories/LOAD_SUCCCES',
  LOAD_FAILURE = '@categories/LOAD_FAILURE' 
}


/**
 * Data types
 */
export interface Category {
  id: number,
  name: string,
  bookId: number
}

/**
 * State type
 */
export interface CategoriesState {
  readonly data: Category[]
  readonly loading: boolean
  readonly error: boolean
}
