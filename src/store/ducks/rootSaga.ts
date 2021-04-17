import { all, takeLatest } from 'redux-saga/effects';

import { BooksTypes, BooksTypes_ } from './books/types';
import { load, loadForCategory, loadForTitle, loadForTitleCategory } from './books/sagas';
import { CategoriesTypes } from './categories/types';
import { load as loadCategorie } from './categories/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(BooksTypes.LOAD_REQUEST, load),
    takeLatest(BooksTypes_.LOAD_FOR_TITLE_REQUEST, loadForTitle),
    takeLatest(BooksTypes.LOAD_FOR_CATEGORY_REQUEST, loadForCategory),
    takeLatest(BooksTypes.LOAD_FOR_TITLE_CATEGORY_REQUEST, loadForTitleCategory),
    takeLatest(CategoriesTypes.LOAD_REQUEST, loadCategorie)
  ]);
}
