import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList, IRoute } from 'types';

import { HOME } from 'screens';
import Routes from './Routes';

const Stack = createStackNavigator<RootStackParamList>();

const Navigator: React.FC = () => {
  const { Screen, Navigator } = Stack;
  const renderRoutes = ({ name, component }: IRoute, i: number) => (
    <Screen key={`${i}-name`} name={name} component={component} />
  );

  return (
    <NavigationContainer>
      <Navigator initialRouteName={HOME}>{Routes.map(renderRoutes)}</Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
