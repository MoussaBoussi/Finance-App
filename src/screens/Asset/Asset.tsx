import React, { FC } from 'react';
import { Text } from 'react-native';
import { ScreenProps } from 'types';

const AssetPage: FC<ScreenProps> = ({ route }) => {
  console.log(route.params);
  return <Text>Yo What's up This ya boy</Text>;
};

export default AssetPage;
