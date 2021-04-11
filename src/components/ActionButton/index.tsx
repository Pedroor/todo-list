import React from "react";

import { TouchableOpacity } from "react-native";
import { ButtonText } from "./styles";

export function ActionButton() {
  return (
    <TouchableOpacity>
      <ButtonText>Login</ButtonText>
    </TouchableOpacity>
  );
}
