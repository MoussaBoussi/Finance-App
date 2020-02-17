import React, { FC } from 'react';
import { Card, Text } from 'react-native-elements';
import { ScreenProps } from 'types';

const AssetPage: FC<ScreenProps> = ({ route }) => {
  console.log(route.params);
  return (
    <Card title="Hello World">
      <Text>Yo What's up This ya boy</Text>
    </Card>
  );
};

export default AssetPage;
