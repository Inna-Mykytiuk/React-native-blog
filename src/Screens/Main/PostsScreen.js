import React from "react";
import { moduleName } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { DefaultScreenPosts } from "../nestedScreens/DefaultScreen";
import { CommentsScreen } from "../Second/CommentsScreen";
import { Map } from "../Second/MapScreen";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";

const NestedScreen = createStackNavigator();

export const PostsScreen = ({ navigation, route }) => {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({ tabBarVisible: false });
  } else ({ tabBarVisible: true });

  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name='DefaultScreen'
        component={DefaultScreenPosts}
        // options={{ headerShown: false }}
        options={{
          tabBarIcon: ({ focused }) => <GridIcon focused={focused} />,
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
      <NestedScreen.Screen
        name='Comments'
        component={CommentsScreen}
        options={{
          headerLeftContainerStyle: { paddingLeft: 10 },
          headerTitleAlign: "center",

          headerTitleStyle: { paddingBottom: 5 },
          // headerLeft: () => (
          //   <TouchableOpacity
          //     style={styles.backButton}
          //     onPress={() => navigation.navigate("Profile")}
          //   >
          //     <Feather name='arrow-left' size={24} color='#BDBDBD' />
          //   </TouchableOpacity>
          // ),
        }}
      />
      <NestedScreen.Screen
        name='Map'
        component={Map}
        options={{
          headerLeftContainerStyle: { paddingLeft: 10 },
          headerTitleAlign: "center",

          headerTitleStyle: { paddingBottom: 5 },
          // headerLeft: () => (
          //   <TouchableOpacity
          //     style={styles.backButton}
          //     onPress={() => navigation.navigate("Profile")}
          //   >
          //     <Feather name='arrow-left' size={24} color='#BDBDBD' />
          //   </TouchableOpacity>
          // ),
        }}
      />
    </NestedScreen.Navigator>
  );
};

const styles = StyleSheet.create({
  logoutButton: {
    paddingRight: 30,
  },

  backButton: {
    marginLeft: 16,
  },
});
