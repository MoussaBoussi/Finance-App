import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  Asset: { name: string };
};

type ScreenProps = {
  route: RouteProp<RootStackParamList, any>;
  navigation: StackNavigationProp<RootStackParamList, any>;
};

export { RootStackParamList, ScreenProps };
