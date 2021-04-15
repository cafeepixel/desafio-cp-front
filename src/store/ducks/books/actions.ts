import { action } from 'typesafe-actions';
import { BooksTypes, Book } from './types';

export const loadRequest = () => action(BooksTypes.LOAD_REQUEST);

export const loadSuccess = (data: Book[]) => action(BooksTypes.LOAD_SUCCCES, { data });

export const loadFailure = () => action(BooksTypes.LOAD_FAILURE);
