import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ROUTES} from '../constants';
import {HomeScreen} from '../modules';

type RootStackParamList = {
  [ROUTES.Splashscreen]: undefined;
  [ROUTES.Home]: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'black',
        headerShown: false,
      }}>
      <Stack.Screen name={ROUTES.Home} component={HomeScreen} />
    </Stack.Navigator>
  );
};