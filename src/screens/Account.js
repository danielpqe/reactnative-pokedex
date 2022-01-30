import { View, Text } from "react-native";
import React from "react";
import LoginFrom from "../components/Auth/LoginForm";
import UserData from "../components/Auth/UserData";
export default function Account() {
  const auth = null;

  return <View>{auth ? <UserData /> : <LoginFrom />}</View>;
}
