import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './interfaces';
import {routes} from './constants';
import UsersList from '../screens/usersList/UsersList';
import UserDetails from '../screens/userDetails/UserDetails';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={routes.UsersList}>
        <Stack.Screen name={routes.UsersList} component={UsersList} />
        <Stack.Screen name={routes.Details} component={UserDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
