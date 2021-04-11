import React, { useState } from "react";
import { Text, View } from "react-native";

import { Input } from "../../components/Input/Input";
import { InputMask } from "../../components/Input/MaskedInput";
import { ActionButton } from "../../components/ActionButton";

import {
  Container,
  RegisterLabel,
  IsRegisterLabel,
  RecoverPasswordLabel,
  WelcomeTitle,
} from "./styles";

export function Login() {
  const [password, setPassword] = useState("aaaa");
  return (
    <Container>
      <WelcomeTitle>Bem-vindo(a)!</WelcomeTitle>
      <Input placeholder="Email" />
      <InputMask placeholder="Password" text={password} setText={setPassword} />
      <RecoverPasswordLabel>Esqueceu sua senha?</RecoverPasswordLabel>
      <ActionButton />
      <IsRegisterLabel>Não tem uma conta?</IsRegisterLabel>
      <RegisterLabel>Cadastre-se</RegisterLabel>
    </Container>
  );
}
