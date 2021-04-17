import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '@/Pages/Home';
import Cart from '@/Pages/Cart';
import Category from './Pages/Category';
import Succsess from './Pages/Cart/Succsess';

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/categories/:id/books" exact component={Category} />
      <Route path="/cart" component={Cart} />
      <Route path="/succsess" component={Succsess} />
    </Switch>
  );
};

export default Routes;