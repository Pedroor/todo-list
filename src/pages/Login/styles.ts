import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
`;

export const WelcomeTitle = styled.Text`
  ${props => props.theme.textVariants.title}
`;
export const RecoverPasswordLabel = styled.Text`
  ${props => props.theme.textVariants.subtitle}
`;

export const IsRegisterLabel = styled.Text`
  ${props => props.theme.textVariants.subtitle}
`;

export const RegisterLabel = styled.Text`
  ${props => props.theme.textVariants.subtitle}
  background-color: ${props => props.theme.colors.green};
`;
