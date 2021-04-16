import { call, put } from 'redux-saga/effects';
import {api} from '@/services/api';

import { loadSuccess, loadFailure } from './actions';

export function* load() {
  try {
    const response = yield call(api.get, 'books');

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}


export function* loadForTitle(title: string) {
  try {
    const response = yield call(api.get, `books?title_like=${title}`);

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}