import React from 'react';
import AppRoute from './app.routes';
import AuthRoute from './auth.routes';
// import {AuthContext} from '../contexts/authContext';
import {useSelector} from 'react-redux';
import {selectAuth} from '../store/features/authSlice';

const Routes = () => {
  // const {user} = React.useContext(AuthContext);
  const user = useSelector(selectAuth);
  return user ? <AppRoute /> : <AuthRoute />;
};

export default Routes;
