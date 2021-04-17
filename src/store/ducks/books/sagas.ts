import { call, put } from 'redux-saga/effects';
import {api} from '@/services/api';

import { loadSuccess, loadFailure, loadForTitleSuccess, loadForCategoryFailure, loadForTitleFailure, loadForTitleRequest, loadForCategorySuccess, loadForTitleCategorySuccess } from './actions';
import { AnyAction } from 'redux';
import { Book } from './types';
import { loadCategoryActived } from '../categories/actions';

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

    yield put(loadForTitleSuccess(response.data));
  } catch (err) {
    yield put(loadForTitleFailure());
  }
}


export function* loadForCategory(action:AnyAction) {
  try {
    
    const response = yield call(api.get, `categories/${action.payload.category.id}/books`);
    yield put(loadCategoryActived(action.payload.category))
    console.log(response.data)
    yield put(loadForCategorySuccess(response.data));
  } catch (err) {
    yield put(loadForTitleFailure());
  }
}


export function* loadForTitleCategory(action:AnyAction) {
  try {

    
    const response = yield call(api.get, `categories/${action.payload.search.categoryId}/books?title_like=${action.payload.search.title}`);

    yield put(loadForTitleCategorySuccess(response.data));
  } catch (err) {
    yield put(loadForTitleFailure());
  }
}