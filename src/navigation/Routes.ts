import { iRoute } from 'types';
import { Home, Asset } from 'screens';

export const HOME = 'Home';
export const ASSET = 'Asset';

const Routes: iRoute[] = [
  { name: HOME, component: Home },
  { name: ASSET, component: Asset },
];

export default Routes;
