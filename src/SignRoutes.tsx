import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AuthContext from '@/contexts/auth';
import Login from '@/Pages/Login';
import PrivateRoutes from './routes';



const Routes: React.FC = () => {
  const {signed} = useContext(AuthContext)

if(!signed){
    
 return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Redirect to="/" />
      </Switch>
 );
}
return (
        <Switch>
            <Route path="/" component={PrivateRoutes} />
            <Redirect to="/*" />
        </Switch>
);
};

export default Routes;