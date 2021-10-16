import React from 'react';
import AppRoute from './app.routes';
import AuthRoute from './auth.routes';
import {AuthContext} from '../contexts/authContext';

const Routes = () => {
  const {user} = React.useContext(AuthContext);
  return user ? <AppRoute /> : <AuthRoute />;
};

export default Routes;
