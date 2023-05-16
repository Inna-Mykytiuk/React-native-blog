// import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Login from "./src/Screens/LoginScreen";

export default function App() {
  return (
    <>
      <Login />
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
