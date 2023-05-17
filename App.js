// import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Login from "./src/Screens/LoginScreen";
import Registration from "./src/Screens/RegistrationScreen";

export default function App() {
  return (
    <>
      {/* <Login /> */}
      <Registration />
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
