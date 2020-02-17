import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList, iRoute } from 'types';

import Routes, { HOME } from './Routes';

const Stack = createStackNavigator<RootStackParamList>();

const Navigator: React.FC = () => {
  const { Screen, Navigator } = Stack;
  const renderRoutes = ({ name, component }: iRoute) => (
    <Screen name={name} component={component} />
  );

  return (
    <NavigationContainer>
      <Navigator initialRouteName={HOME}>{Routes.map(renderRoutes)}</Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
