import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/Home/Home';

const AppStack = createNativeStackNavigator();

const AppRoute = () => (
  <AppStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <AppStack.Screen name="Home" component={Home} />
  </AppStack.Navigator>
);

export default AppRoute;
