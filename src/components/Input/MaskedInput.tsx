import React, { useRef } from "react";

import { InputMaskText, InputArea } from "./styles";
import { TouchableOpacity, TextInputProps, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface InputMaskProps extends TextInputProps {
  text: string;
  setText: (text: string) => void;
}

export function InputMask({ text, setText, ...rest }: InputMaskProps) {
  const inputRef = useRef<TextInput>(null);

  return (
    <InputArea>
      <InputMaskText
        ref={inputRef}
        value={text}
        onChangeText={text => setText(text)}
        {...rest}
      />
      <TouchableOpacity>
        <Ionicons name="eye" color="#969590" size={25} />
      </TouchableOpacity>
    </InputArea>
  );
}
