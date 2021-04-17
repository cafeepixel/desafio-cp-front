/**
 * Action types
 */
export enum BooksTypes {
  LOAD_REQUEST = '@books/LOAD_REQUEST',
  LOAD_SUCCCES = '@books/LOAD_SUCCCES',
  LOAD_FAILURE = '@books/LOAD_FAILURE', 

  LOAD_FOR_CATEGORY_REQUEST = '@books/LOAD_FOR_CATEGORY_REQUEST',
  LOAD_FOR_CATEGORY_SUCCCES = '@books/LOAD_FOR_CATEGORY_SUCCCES',
  LOAD_FOR_CATEGORY_FAILURE = '@books/LOAD_FOR_CATEGORY_FAILURE',

  LOAD_FOR_TITLE_CATEGORY_REQUEST = '@books/LOAD_FOR_TITLE_CATEGORY_REQUEST',
  LOAD_FOR_TITLE_CATEGORY_SUCCCES = '@books/LOAD_FOR_TITLE_CATEGORY_SUCCCES',
  LOAD_FOR_TITLE_CATEGORY_FAILURE = '@books/LOAD_FOR_TITLE_CATEGORY_FAILURE',

}

export enum BooksTypes_ {
  LOAD_FOR_TITLE_REQUEST = '@books/LOAD_FOR_TITLE_REQUEST',
  LOAD_FOR_TITLE_SUCCCES = '@books/LOAD_FOR_TITLE_SUCCCES',
  LOAD_FOR_TITLE_FAILURE = '@books/LOAD_FOR_TITLE_FAILURE', 
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
  readonly filter: string
}
