/**
 * Action types
 */
export enum CategoriesTypes {
  LOAD_REQUEST = '@categories/LOAD_REQUEST',
  LOAD_SUCCCES = '@categories/LOAD_SUCCCES',
  LOAD_FAILURE = '@categories/LOAD_FAILURE',
  LOAD_CATEGORY_ACTIVED_SUCCCES = '@categories/LOAD_CATEGORY_ACTIVED_SUCCCES'
}


/**
 * Data types
 */
export interface Category {
  id: number,
  name: string,
}

/**
 * State type
 */
export interface CategoriesState {
  readonly data: Category[]
  readonly actived: Category
  readonly loading: boolean
  readonly error: boolean
}
