import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import AppRoute from './routes/app.routes';
import AuthRoute from './routes/auth.routes';

const App = () => {
  return (
    <NavigationContainer>
      <AuthRoute />
    </NavigationContainer>
  );
};

export default App;
