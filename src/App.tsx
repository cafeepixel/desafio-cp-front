import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import '@/stylesGlobal/global.scss';
import { Provider } from 'react-redux';

import store from './store'
import Layout from './Pages/Layout';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Layout/>
        <Routes />
      </Provider>
    </BrowserRouter>
  );
};

export default App;