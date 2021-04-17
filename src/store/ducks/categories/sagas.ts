import { call, put } from 'redux-saga/effects';
import {api} from '@/services/api';

import { loadCategoriesSuccess, loadCategoriesFailure } from './actions';


export function* load() {
  try {
    const response = yield call(api.get, 'categories');

    yield put(loadCategoriesSuccess(response.data));
  } catch (err) {
    yield put(loadCategoriesFailure());
  }
}
