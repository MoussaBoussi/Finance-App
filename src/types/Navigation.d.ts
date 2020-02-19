import { FC } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { HOME, ASSET } from 'screens';

type RootStackParamList = {
  Home: undefined;
  Asset: { name: string };
};

const RouteList = [HOME, ASSET] as const;
type RouteName = typeof RouteList[number];

type ScreenProps = {
  route: RouteProp<RootStackParamList, RouteName>;
  navigation: StackNavigationProp<RootStackParamList, RouteName>;
};

interface IRoute {
  name: RouteName;
  component: FC;
}

export { RootStackParamList, ScreenProps, IRoute };
