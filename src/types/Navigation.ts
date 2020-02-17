import { FC } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { HOME, ASSET } from 'navigation';

type RootStackParamList = {
  Home: undefined;
  Asset: { name: string };
};

type ScreenProps = {
  route: RouteProp<RootStackParamList, typeof RouteList[number]>;
  navigation: StackNavigationProp<RootStackParamList, typeof RouteList[number]>;
};

const RouteList = [HOME, ASSET] as const;

interface iRoute {
  name: typeof RouteList[number];
  component: FC;
}

export { RootStackParamList, ScreenProps, iRoute };
