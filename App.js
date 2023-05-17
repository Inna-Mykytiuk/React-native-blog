// import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import LoginScreen from "./src/Screens/Auth/LoginScreen";
// import RegistrationScreen from "./src/Screens/Auth/RegistrationScreen";
// import { PostsScreen } from "./src/Screens/PostsScreen";

export default function App() {
  return (
    <>
      <LoginScreen />
      {/* <RegistrationScreen /> */}
      {/* <PostsScreen /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6EAAFF87",
    alignItems: "center",
    justifyContent: "center",
  },
});
