import { action } from 'typesafe-actions';
import { CategoriesTypes, Category } from './types';

export const loadCategoriesRequest = () => action(CategoriesTypes.LOAD_REQUEST);

export const loadCategoriesSuccess = (data: Category[]) => action(CategoriesTypes.LOAD_SUCCCES, { data });

export const loadCategoriesFailure = () => action(CategoriesTypes.LOAD_FAILURE);

export const loadCategoryActived = (data: Category) => action(CategoriesTypes.LOAD_CATEGORY_ACTIVED_SUCCCES, { data });


