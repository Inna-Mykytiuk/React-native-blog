// // // import { StatusBar } from "expo-status-bar";
// // import { StyleSheet, View } from "react-native";
// import LoginScreen from "./src/Screens/Auth/LoginScreen";
// import RegistrationScreen from "./src/Screens/Auth/RegistrationScreen";
// // // import { PostsScreen } from "./src/Screens/PostsScreen";

// import "react-native-gesture-handler";
// import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";

// // import { Home } from "./Screens/Main/Home";
// import { NavigationContainer } from "@react-navigation/native";

// const MainStack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <MainStack.Navigator initialRouteName='Login' options={{ headerShown: false }}>
//         <MainStack.Screen
//           name='Login'
//           component={LoginScreen}
//
//         />
//         <MainStack.Screen
//           name='Registration'
//           component={RegistrationScreen}
//         />

//         {/* <MainStack.Screen
//           name='Home'
//           component={Home}
//         /> */}
//       </MainStack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

import React from "react";
import { useRoute } from "./router";

const App = () => {
  const routing = useRoute(null);
  return <>{routing}</>;
};

export default App;
