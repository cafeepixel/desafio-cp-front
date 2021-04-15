import { all, takeLatest } from 'redux-saga/effects';

import { BooksTypes } from './books/types';
import { load } from './books/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(BooksTypes.LOAD_REQUEST, load),
  ]);
}
