import React, { FC } from 'react';
import { Button } from 'react-native-elements';
import { ScreenProps } from 'types';
import { ASSET } from '../Asset';

const Home: FC<ScreenProps> = props => {
  return (
    <Button title="Yoooo" onPress={() => props.navigation.navigate(ASSET, { name: 'test' })} />
  );
};

export default Home;
