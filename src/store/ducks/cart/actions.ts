import { action } from 'typesafe-actions';
import { Book } from '../books/types';
import { CartTypes } from './types';




export const removeSuccess = (book: Book) => action(CartTypes.REMOVE_SUCCCES, { book });

export const addSuccess = (book: Book) => action(CartTypes.ADD_SUCCCES, { book });

