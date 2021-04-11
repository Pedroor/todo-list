import styled from "styled-components/native";
import { TextInputMask } from "react-native-masked-text";

export const InputMaskText = styled.TextInput`
  width: 85%;
  height: 56px;
  color: black;
  padding: 13px;
  font-size: 16px;
`;

export const TextInput = styled.TextInput`
  width: 85%;
  height: 56px;
  border-width: 0.5px;
  border-radius: 32px;
  border-color: ${props => props.theme.colors.gray};
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.gray};
  margin: 5px;
  padding-left: 13px;
`;

export const InputArea = styled.View`
  flex-direction: row;
  width: 85%;
  border-width: 0.5px;
  border-radius: 32px;
  border-color: ${props => props.theme.colors.gray};
  background-color: ${props => props.theme.colors.background};

  height: 56px;
  align-items: center;
`;
