import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../pages/SignIn/SignIn';

const AuthStack = createNativeStackNavigator();

const AuthRoute = () => (
  <AuthStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <AuthStack.Screen name="SignIn" component={SignIn} />
  </AuthStack.Navigator>
);

export default AuthRoute;
