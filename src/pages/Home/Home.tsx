import React from 'react';
import { Button } from 'react-native-elements';
import Props from './PropTypes';

const Home: React.FC<Props> = props => {
  return (
    <Button title="Yoooo" onPress={() => props.navigation.navigate('Asset', { name: 'test' })} />
  );
};

export default Home;
