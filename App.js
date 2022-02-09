import { StyleSheet, Text } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation/Navigation";
import { AuthProvider } from "./src/context/AuthContext";
export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
