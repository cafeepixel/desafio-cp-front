import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { BooksState } from './ducks/books/types';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
  books: BooksState
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
