import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {RootStackParamList} from './interfaces';
import {routes} from './constants';
import Users from '../screens/usersList/Users';
import UserDetails from '../screens/userDetails/UserDetails';
import MainHeader from '../common/components/headers/MainHeader';
import {getHeaderTitle} from './helpers';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={routes.Users}
        screenOptions={({route, navigation}) => ({
          header: () => (
            <MainHeader
              title={getHeaderTitle(route.name)}
              showBackButton={navigation.canGoBack()}
            />
          ),
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        })}>
        <Stack.Screen name={routes.Users} component={Users} />
        <Stack.Screen name={routes.Details} component={UserDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
