import { PostsScreen } from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  ArrowLeftIcon,
  GridIcon,
  LogOutIcon,
  PlusIcon,
  UserIcon,
} from "../../../Components/Icons";
// import { CommentsScreen } from "../Second/CommentsScreen";

const Tab = createBottomTabNavigator();

const Home = ({ navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName='Posts'
      screenOptions={{
        headerShown: true,
        tabBarLabel: () => null,
        tabBarStyle: {
          height: 83,
          paddingTop: 9,
          boxShadow: "0px -0.5px 0px rgba(0, 0, 0, 0.3)",
          paddingLeft: 45,
        },
      }}
    >
      <Tab.Screen
        name='Posts'
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused }) => <GridIcon focused={focused} />,
          headerTitleAlign: "center",
          headerRight: () => (
            <LogOutIcon onPress={() => navigation.navigate("Login")} />
          ),
          headerRightContainerStyle: { paddingRight: 16 },
        }}
      />
      <Tab.Screen
        name='Create'
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ focused }) => <PlusIcon focused={focused} />,
          headerTitleAlign: "center",
          headerTitle: "Create post",
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.navigate("Posts")} />
          ),
          headerLeftContainerStyle: { paddingLeft: 16 },

          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name='Comments'
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => <UserIcon focused={focused} />,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;
