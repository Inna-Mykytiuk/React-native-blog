// // import { StatusBar } from "expo-status-bar";
// import { StyleSheet, View } from "react-native";
import LoginScreen from "./src/Screens/Auth/LoginScreen";
import RegistrationScreen from "./src/Screens/Auth/RegistrationScreen";
// // import { PostsScreen } from "./src/Screens/PostsScreen";

import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// import { Home } from "./Screens/Main/Home";
import { NavigationContainer } from "@react-navigation/native";

const MainStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName='Login'>
        {/* <MainStack.Screen
          name='Login'
          component={LoginScreen}
          options={{ headerShown: false }}
        /> */}
        <MainStack.Screen
          name='Registration'
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />

        {/* <MainStack.Screen
          options={{ headerShown: false }}
          name='Home'
          component={Home}
        /> */}
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
