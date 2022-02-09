import { View, Text } from "react-native";
import React from "react";
import LoginFrom from "../components/Auth/LoginForm";
import UserData from "../components/Auth/UserData";
import useAuth from "../hooks/useAuth";

export default function Account() {
  const { auth } = useAuth();

  return <View>{auth ? <UserData /> : <LoginFrom />}</View>;
}
