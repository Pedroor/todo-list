import styled from "styled-components/native";

export const Container = styled.View``;
export const ButtonText = styled.Text`
  ${props => props.theme.textVariants.subtitle}
  color: ${props => props.theme.colors.background}
`;
