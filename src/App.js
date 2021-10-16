import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes/routes';
import {AuthProvider} from './contexts/authContext';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
