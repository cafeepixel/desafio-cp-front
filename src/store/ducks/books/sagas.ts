import { call, put } from 'redux-saga/effects';
import {api} from '@/services/api';

import { loadSuccess, loadFailure, loadForTitleSuccess, loadForCategoryFailure, loadForTitleFailure, loadForTitleRequest } from './actions';
import { AnyAction } from 'redux';
import { Book } from './types';

export function* load() {
  try {
    const response = yield call(api.get, 'books');

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}


export function* loadForTitle(action:AnyAction) {
  try {
    
    const response = yield call(api.get, `books?title_like=${action.payload.title}`);
    console.log(response)

    yield put(loadForTitleSuccess(response.data));
  } catch (err) {
    yield put(loadForTitleFailure());
  }
}