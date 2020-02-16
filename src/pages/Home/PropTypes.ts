import { RootStackParamList } from 'types';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type Route = RouteProp<RootStackParamList, 'Home'>;

type NavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: NavigationProp;
  route: Route;
};

export default Props;
