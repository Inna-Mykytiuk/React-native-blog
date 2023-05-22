import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { CreatePostsScreen } from "./CreatePostsScreen";
import { PostsScreen } from "./PostsScreen";
import { ProfileScreen } from "./ProfileScreen";
import { CommentsScreen } from "../Second/CommentsScreen";

import {
  ArrowLeftIcon,
  GridIcon,
  LogOutIcon,
  PlusIcon,
  UserIcon,
} from "../../../Components/Icons";

const Tab = createBottomTabNavigator();

export const Home = ({ navigation }) => {
  return (
    <Tab.Navigator
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
      <Tab.Screen
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
      <Tab.Screen
        name='CreatePosts'
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ focused }) => <PlusIcon focused={focused} />,
          headerLeft: () => (
            <Feather name='arrow-left' size={24} color='gray' />
          ),
          headerShown: false,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => <UserIcon focused={focused} />,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  logoutButton: {
    paddingRight: 30,
  },
});
