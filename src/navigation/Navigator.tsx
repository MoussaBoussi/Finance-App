import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from 'types';
import { Home, Asset } from 'pages';

const Stack = createStackNavigator<RootStackParamList>();

const Navigator: React.FC = () => {
  const { Screen, Navigator } = Stack;

  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen name="Home" component={Home} />
        <Screen name="Asset" component={Asset} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
