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

// export const Home = ({ navigation }) => {
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

// import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
// import React from "react";
// import { AntDesign, SimpleLineIcons, Feather } from "@expo/vector-icons";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { CreatePostsScreen } from "./CreatePostsScreen";
// import { PostsScreen } from "./PostsScreen";
// import { ProfileScreen } from "./ProfileScreen";

// import {
//   ArrowLeftIcon,
//   GridIcon,
//   LogOutIcon,
//   PlusIcon,
//   UserIcon,
// } from "../../../Components/Icons";

// const BottomTabs = createBottomTabNavigator();

// export const Home = ({ navigation }) => {
//   return (
//     <BottomTabs.Navigator
//       initialRouteName='Posts'
//       screenOptions={{
//         tabBarShowLabel: false,
//         tabBarStyle: { height: 80 },
//         tabBarStyle: {
//           height: 83,
//           paddingTop: 9,
//           boxShadow: "0px -0.5px 0px rgba(0, 0, 0, 0.3)",
//           paddingLeft: 45,
//         },
//       }}
//     >
//       {/* GRID */}
//       <BottomTabs.Screen
//         options={{
//           // tabBarIcon: ({ focused, size, color }) => (
//           //   <SimpleLineIcons name='grid' size={20} color={color} />
//           // ),
//           tabBarIcon: ({ focused }) => <GridIcon focused={focused} />,
//           headerTitleAlign: "center",
//           headerRightContainerStyle: { paddingRight: 20 },
//           headerRight: () => (
//             <TouchableOpacity
//               style={styles.logoutButton}
//               activeOpacity={0.5}
//               onPress={() => navigation.navigate("Login")}
//             >
//               <Feather name='log-out' size={24} color='gray' />
//             </TouchableOpacity>
//           ),
//         }}
//         name='Posts'
//         component={PostsScreen}
//       />

//       {/* ADD BUTTON */}
//       <BottomTabs.Screen
//         options={{
//           tabBarIcon: ({ focused }) => {
//             return (
//               <TouchableOpacity
//                 focused={focused}
//                 style={styles.addButton}
//                 activeOpacity={0.5}
//                 onPress={() => navigation.navigate("CreatePost")}
//               >
//                 <Text style={styles.addButtonText}>+</Text>
//               </TouchableOpacity>
//             );
//           },
//           headerShown: false,
//           tabBarStyle: { display: "none" },
//           headerTitleAlign: "center",
//         }}
//         name='CreatePosts'
//         component={CreatePostsScreen}
//       />

//       {/* PROFILE BUTTON */}
//       <BottomTabs.Screen
//         options={{
//           // tabBarIcon: ({ focused, size, color }) => {
//           //   return (
//           //     <AntDesign
//           //       name='user'
//           //       size={20}
//           //       color={color}
//           //       focused={focused}
//           //     />
//           //   );
//           // },
//           tabBarIcon: ({ focused, color }) => (
//             <UserIcon focused={focused} name='user' size={20} color={color} />
//           ),
//           headerShown: false,
//         }}
//         name='Profile'
//         component={ProfileScreen}
//       />
//     </BottomTabs.Navigator>
//   );
// };

// const styles = StyleSheet.create({
//   registerButton: {
//     backgroundColor: "#FF6C00",
//     height: 50,
//     width: 343,
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 100,
//     marginTop: 44,
//   },
//   registerButtonText: {
//     color: "#fff",
//     fontWeight: "400",
//   },
//   loginLink: {
//     marginTop: 16,
//     marginBottom: 66,
//   },
//   loginLinkText: {
//     fontStyle: "normal",
//     fontWeight: "400",
//     fontSize: 16,
//     lineHeight: 19,
//   },
//   footer: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     width: "100%",
//     borderTopColor: "#999999",
//     borderTopWidth: 1,
//   },
//   addButton: {
//     backgroundColor: "#FF6C00",
//     height: 40,
//     width: 70,
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 20,
//   },
//   addButtonText: {
//     color: "#ffffff",
//     fontSize: 18,
//   },
//   gridButton: {
//     marginRight: 40,
//   },
//   userButton: {
//     marginLeft: 40,
//   },
// });
// import {
//   ArrowLeftIcon,
//   GridIcon,
//   LogOutIcon,
//   PlusIcon,
//   UserIcon,
// } from "../../../Components/Icons";

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { CreatePostsScreen } from "./CreatePostsScreen";
import { PostsScreen } from "./PostsScreen";
import { ProfileScreen } from "./ProfileScreen";

const Tab = createBottomTabNavigator();

export const Home = ({ navigation }) => {
  const handleBackPress = () => {
    navigation.navigate("Posts");
  };

  return (
    <Tab.Navigator
      initialRouteName='Posts'
      screenOptions={{
        tabBarStyle: { height: 80 },
        tabBarShowLabel: false,
        tabStyle: styles.tabStyle, // Додано стиль для кожної вкладки
        // Додано стиль для активної вкладки
      }}
      tabBarOptions={{
        activeTintColor: "#fff",
        inactiveTintColor: "#212121",
        activeTabStyle: styles.activeTabStyle,
        activeBackgroundColor: "#FF6C00",
        style: {
          borderTopWidth: 1,
          borderTopColor: "#ccc",
        },
        tabStyle: {
          borderRadius: 50,
          margin: "12px",
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
      />
      <Tab.Screen
        name='CreatePosts'
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name='plus' size={size} color={color} />
          ),
          headerLeft: () => (
            <TouchableOpacity
              style={styles.backButton}
              activeOpacity={0.5}
              onPress={handleBackPress}
            >
              <Feather name='arrow-left' size={24} color='gray' />
            </TouchableOpacity>
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
});
