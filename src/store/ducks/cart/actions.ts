import { action } from 'typesafe-actions';
import { CartTypes, Item } from './types';

export const loadRequest = () => action(CartTypes.LOAD_REQUEST);

export const loadSuccess = (data: Item[]) => action(CartTypes.LOAD_SUCCCES, { data });

export const loadFailure = () => action(CartTypes.LOAD_FAILURE);
