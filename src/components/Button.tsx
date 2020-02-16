import React from "react";
import { Button } from "react-native";

interface Props {}

const ButtonComponent: React.FC<Props> = () => {
  return <Button title="Yo" onPress={() => null} />;
};

export default ButtonComponent;
