import { RootStackParamList } from 'types';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type Route = RouteProp<RootStackParamList, 'Asset'>;

type NavigationProp = StackNavigationProp<RootStackParamList, 'Asset'>;

type Props = {
  navigation: NavigationProp;
  route: Route;
};

export default Props;
