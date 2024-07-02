// src/navigation/AppNavigator.tsx
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './interfaces';
import {routes} from './constants';
import HomeScreen from '../screens/homeScreen/HomeScreen';
import UserDetails from '../screens/userDetails/UserDetails';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name={routes.Details} component={UserDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
