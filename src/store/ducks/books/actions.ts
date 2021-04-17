import { action } from 'typesafe-actions';
import { Category } from '../categories/types';
import { BooksTypes, Book, BooksTypes_ } from './types';

export const loadRequest = () => action(BooksTypes.LOAD_REQUEST);

export const loadSuccess = (data: Book[]) => action(BooksTypes.LOAD_SUCCCES, { data });

export const loadFailure = () => action(BooksTypes.LOAD_FAILURE);


export const loadForCategoryRequest = (category:Category) => action(BooksTypes.LOAD_FOR_CATEGORY_REQUEST, {category});

export const loadForCategorySuccess = (data: Book[]) => action(BooksTypes.LOAD_FOR_CATEGORY_SUCCCES, { data });

export const loadForCategoryFailure = () => action(BooksTypes.LOAD_FOR_CATEGORY_FAILURE);


export const loadForTitleRequest = (title:string) => action(BooksTypes_.LOAD_FOR_TITLE_REQUEST, {title});

export const loadForTitleSuccess = (data: Book[]) => action(BooksTypes_.LOAD_FOR_TITLE_SUCCCES, { data });

export const loadForTitleFailure = () => action(BooksTypes_.LOAD_FOR_TITLE_FAILURE);



export const loadForTitleCategoryRequest = (search:any) => action(BooksTypes.LOAD_FOR_TITLE_CATEGORY_REQUEST, {search});

export const loadForTitleCategorySuccess = (data: Book[]) => action(BooksTypes.LOAD_FOR_TITLE_CATEGORY_SUCCCES, { data });

export const loadForTitleCategoryFailure = () => action(BooksTypes.LOAD_FOR_TITLE_CATEGORY_FAILURE);
