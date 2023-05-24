import "react-native-gesture-handler";
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

import { LoginScreen } from "./src/Screens/Auth/LoginScreen";
import { RegistrationScreen } from "./src/Screens/Auth/RegistrationScreen";
import { PostsScreen } from "./src/Screens/Main/PostsScreen";
import { CreatePostsScreen } from "./src/Screens/Main/CreatePostsScreen";
import { ProfileScreen } from "./src/Screens/Main/ProfileScreen";
import { TouchableOpacity } from "react-native";

// icons import
import {
  ArrowLeftIcon,
  GridIcon,
  LogOutIcon,
  PlusIcon,
  UserIcon,
} from "./Components/Icons";
import { Feather } from "@expo/vector-icons";

const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator
        initialRouteName='Login'
        options={{ headerShown: false }}
      >
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
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator
      initialRouteName='Posts'
      screenOptions={{
        tabBarStyle: {
          height: 83,
          paddingTop: 9,
          boxShadow: "0px -0.5px 0px rgba(0, 0, 0, 0.3)",
          paddingLeft: 45,
        },
        tabBarLabel: () => null,
      }}
    >
      <MainTab.Screen
        name='Posts'
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused }) => <GridIcon focused={focused} />,
          // headerLeftContainerStyle: { paddingLeft: 20 },
          headerTitleAlign: "center",
          headerTitleStyle: { paddingBottom: 5 },
          headerRight: () => (
            <TouchableOpacity
              style={styles.logoutButton}
              activeOpacity={0.5}
              onPress={() => navigation.navigate("Login")}
            >
              <Feather name='log-out' size={24} color='#BDBDBD' />
            </TouchableOpacity>
          ),
        }}
      />
      <MainTab.Screen
        name='Create Posts'
        component={CreatePostsScreen}
        options={{
          headerLeftContainerStyle: { paddingLeft: 10 },
          headerTitleAlign: "center",
          headerTitleStyle: { paddingBottom: 5 },
          tabBarIcon: ({ focused }) => <PlusIcon focused={focused} />,
          headerLeft: () => (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.navigate("Posts")}
            >
              <Feather name='arrow-left' size={24} color='gray' />
            </TouchableOpacity>
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <MainTab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => <UserIcon focused={focused} />,
          headerShown: false,
        }}
      />
    </MainTab.Navigator>
  );
};
export default useRoute;
