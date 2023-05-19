// import { PostsScreen } from "./PostsScreen";
// import CreatePostsScreen from "./CreatePostsScreen";
// import ProfileScreen from "./ProfileScreen";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import {
//   ArrowLeftIcon,
//   GridIcon,
//   LogOutIcon,
//   PlusIcon,
//   UserIcon,
// } from "../../../Components/Icons";
// // import { CommentsScreen } from "../Second/CommentsScreen";

// const Tab = createBottomTabNavigator();

// const Home = ({ navigation }) => {
//   return (
//     <Tab.Navigator
//       initialRouteName='Posts'
//       screenOptions={{
//         headerShown: true,
//         tabBarLabel: () => null,
//         tabBarStyle: {
//           height: 83,
//           paddingTop: 9,
//           boxShadow: "0px -0.5px 0px rgba(0, 0, 0, 0.3)",
//           paddingLeft: 45,
//         },
//       }}
//     >
//       <Tab.Screen
//         name='Posts'
//         component={PostsScreen}
//         options={{
//           tabBarIcon: ({ focused }) => <GridIcon focused={focused} />,
//           headerTitleAlign: "center",
//           headerRight: () => (
//             <LogOutIcon onPress={() => navigation.navigate("Login")} />
//           ),
//           headerRightContainerStyle: { paddingRight: 16 },
//         }}
//       />
//       <Tab.Screen
//         name='Create'
//         component={CreatePostsScreen}
//         options={{
//           tabBarIcon: ({ focused }) => <PlusIcon focused={focused} />,
//           headerTitleAlign: "center",
//           headerTitle: "Create post",
//           headerLeft: () => (
//             <ArrowLeftIcon onPress={() => navigation.navigate("Posts")} />
//           ),
//           headerLeftContainerStyle: { paddingLeft: 16 },

//           tabBarStyle: { display: "none" },
//         }}
//       />
//       <Tab.Screen
//         name='Comments'
//         component={ProfileScreen}
//         options={{
//           tabBarIcon: ({ focused }) => <UserIcon focused={focused} />,
//           headerShown: false,
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default Home;

import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import React from "react";
import { AntDesign, SimpleLineIcons, Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CreatePostsScreen } from "./CreatePostsScreen";
import { PostsScreen } from "./PostsScreen";
import { ProfileScreen } from "./ProfileScreen";

const BottomTabs = createBottomTabNavigator();

export const Home = ({ navigation }) => {
  return (
    <BottomTabs.Navigator
      initialRouteName='Posts'
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { height: 80 },
      }}
    >
      {/* GRID */}
      <BottomTabs.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            return <SimpleLineIcons name='grid' size={20} color={color} />;
          },
          headerTitleAlign: "center",
          headerRightContainerStyle: { paddingRight: 20 },
          headerRight: () => (
            <TouchableOpacity
              style={styles.logoutButton}
              activeOpacity={0.5}
              onPress={() => navigation.navigate("Login")}
            >
              <Feather name='log-out' size={24} color='gray' />
            </TouchableOpacity>
          ),
        }}
        name='Posts'
        component={PostsScreen}
      />

      {/* ADD BUTTON */}
      <BottomTabs.Screen
        options={{
          tabBarIcon: () => {
            return (
              <TouchableOpacity
                style={styles.addButton}
                activeOpacity={0.5}
                onPress={() => navigation.navigate("CreatePostsScreen")}
              >
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
            );
          },
          headerShown: false,
          tabBarStyle: { display: "none" },
          headerTitleAlign: "center",
        }}
        name='CreatePostsScreen'
        component={CreatePostsScreen}
      />

      {/* PROFILE BUTTON */}
      <BottomTabs.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            return <AntDesign name='user' size={20} color={color} />;
          },
          headerShown: false,
        }}
        name='ProfileScreen'
        component={ProfileScreen}
      />
    </BottomTabs.Navigator>
  );
};
