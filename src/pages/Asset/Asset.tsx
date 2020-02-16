import React, { FC } from 'react';
import { Card, Text } from 'react-native-elements';
import Props from './PropTypes';

const AssetPage: FC<Props> = ({ route }) => {
  console.log(route.params);
  return (
    <Card title="Hello World">
      <Text>Yo What's up This ya boy</Text>
    </Card>
  );
};

export default AssetPage;
