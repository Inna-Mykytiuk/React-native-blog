import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { CreatePostsScreen } from "./CreatePostsScreen";
import { PostsScreen } from "./PostsScreen";
import { ProfileScreen } from "./ProfileScreen";

const Tab = createBottomTabNavigator();

export const Home = ({ navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName='Posts'
      screenOptions={{
        tabBarStyle: { height: 80 },
        tabBarShowLabel: false,
        activeTintColor: "#fff",
        inactiveTintColor: "#212121",
        activeTabStyle: styles.activeTabStyle,
        activeBackgroundColor: "#FF6C00",
        tabStyle: {
          borderRadius: 50,
          margin: "12px",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Tab.Screen
        name='Posts'
        component={PostsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name='grid' size={size} color={color} />
          ),
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
          tabBarIcon: ({ color, size }) => (
            <Feather name='plus' size={size} color={color} />
          ),
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
          tabBarIcon: ({ color, size }) => (
            <Feather name='user' color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
  activeTabStyle: {
    backgroundColor: "#ff8c00", // Змінено фон активної вкладки на оранжевий
    borderRadius: 20, // Додано закруглені кути
    padding: 10, // Додано відступи
  },
  logoutButton: {
    paddingRight: 30,
  },
});
