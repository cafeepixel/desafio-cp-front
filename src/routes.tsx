import React, { useContext } from 'react';
import { Switch, Route, RouteProps } from 'react-router-dom';

import Home from '@/Pages/Home';
import Cart from '@/Pages/Cart';
import Category from './Pages/Category';
import Succsess from './Pages/Cart/Succsess';
import AuthContext from './contexts/auth';
import Layout from './Pages/Layout';

const AuthRoute: React.FC<RouteProps> = ({ ...rest }) => {
  const { signed } = useContext(AuthContext);

  if (signed) return <Route {...rest} />;

  return null;
};

const PrivateRoutes = (): JSX.Element => {
  return (
      <>
      <Layout/>
      <AuthRoute exact path="/" component={Home} />
      <AuthRoute exact path="/categories/:id/books" component={Category} />
      <AuthRoute exact path="/cart" component={Cart} />
      <AuthRoute exact path="/succsess" component={Succsess} />
      </>
  );
};

export default PrivateRoutes;