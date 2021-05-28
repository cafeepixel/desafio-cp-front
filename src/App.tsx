import React, { useContext, useEffect } from 'react';
import { BrowserRouter, useHistory } from 'react-router-dom';

import Routes from './SignRoutes';
import '@/stylesGlobal/global.scss';
import { Provider } from 'react-redux';

import store from './store'
import Layout from './Pages/Layout';
import AuthContext, { AuthProvider } from './contexts/auth';

const App = (): JSX.Element => {

  return (
    <AuthProvider>
    <BrowserRouter>
      <Provider store={store}>
        <Routes />
      </Provider>
    </BrowserRouter>
    </AuthProvider>
  );
};

export default App;