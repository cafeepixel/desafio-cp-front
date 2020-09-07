import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Book from './pages/Book';
import Cart from './pages/Cart';


export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Book} />
            <Route path="/cart" component={Cart} />
        </Switch>
    );
}