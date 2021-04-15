/**
 * Action types
 */
export enum BooksTypes {
  LOAD_REQUEST = '@books/LOAD_REQUEST',
  LOAD_SUCCCES = '@books/LOAD_SUCCCES',
  LOAD_FAILURE = '@books/LOAD_FAILURE'
}

/**
 * Data types
 */
export interface Book {
  id: number,
  author: string,
  title: string,
  description: string,
  image_url: string,
  price: number,
  prince_discount: number,
  stars: number,
  review: number
}

/**
 * State type
 */
export interface BooksState {
  readonly data: Book[]
  readonly loading: boolean
  readonly error: boolean
}
