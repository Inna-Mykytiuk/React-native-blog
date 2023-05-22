import "react-native-gesture-handler";
import React from "react";

import { RegistrationScreen } from "../Auth/RegistrationScreen";
import { CommentsScreen } from "../Second/CommentsScreen";
import { Home } from "./Home";
import { LoginScreen } from "../Auth/LoginScreen";
import { ProfileScreen } from "./ProfileScreen";
import { CreatePostsScreen } from "./CreatePostsScreen";

// import { PostsScreen } from "./src/Screens/PostsScreen";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const MainStack = createStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName='Login'
        options={{ headerShown: false }}
      >
        <MainStack.Screen
          name='Login'
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name='Registration'
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />

        <MainStack.Screen
          name='Home'
          component={Home}
          options={{ headerShown: false }}
        />

        <MainStack.Screen
          name='Comments'
          component={CommentsScreen}
          options={{
            headerLeftContainerStyle: { paddingLeft: 10 },
            headerTitleAlign: "center",

            headerTitleStyle: { paddingBottom: 5 },
          }}
        />
        {/* <MainStack.Screen
          name='Create Posts'
          component={CreatePostsScreen}
          options={{
            headerLeftContainerStyle: { paddingLeft: 10 },
            headerTitleAlign: "center",

            headerTitleStyle: { paddingBottom: 5 },
          }}
        /> */}
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
