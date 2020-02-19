import React from 'react';
import { Button, ButtonProps } from 'react-native';
import { useTheme } from 'hooks';

interface Props {}

const ButtonComponent: React.FC<ButtonProps> = props => {
  const {
    palette: {
      primary: { main },
    },
  } = useTheme();

  console.log({ main });
  return <Button {...props} />;
};

export default ButtonComponent;
