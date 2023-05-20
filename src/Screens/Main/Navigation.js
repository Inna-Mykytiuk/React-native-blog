import "react-native-gesture-handler";
import React from "react";

import { RegistrationScreen } from "../Auth/RegistrationScreen";
import { CreatePost } from "../Main/CreatePostsScreen";
import { CommentsScreen } from "../Second/CommentsScreen";
import { Home } from "./Home";
import { LoginScreen } from "../Auth/LoginScreen";
import { ProfileScreen } from "./ProfileScreen";

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
        {/* <MainStack.Screen
          name='CreatePost'
          component={CreatePost}
          options={{ headerShown: false }}
        /> */}
        <MainStack.Screen name='CommentsScreen' component={CommentsScreen} />
        <MainStack.Screen name='Profile' component={ProfileScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
