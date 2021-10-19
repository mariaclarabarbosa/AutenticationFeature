import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes/routes';
// import {AuthProvider} from './contexts/authContext';
import {Provider} from 'react-redux';
import store from './store/store';

const App = () => {
  return (
    <NavigationContainer>
      {/* <AuthProvider>
        <Routes />
      </AuthProvider> */}
      <Provider store={store}>
        <Routes />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
