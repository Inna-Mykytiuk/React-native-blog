import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/Screens/Auth/LoginScreen";
import RegistrationScreen from "./src/Screens/Auth/RegistrationScreen";
import Home from "./src/Screens/Main/Home";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

const AuthStack = createStackNavigator();

export const useRoute = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen
          name='Login'
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name='Registration'
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />

        <AuthStack.Screen
          options={{ headerShown: false }}
          name='Home'
          component={Home}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};
