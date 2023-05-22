// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   TextInput,
//   ImageBackground,
// } from "react-native";
// // import React from "react";
// import { EvilIcons, Ionicons } from "@expo/vector-icons";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { CameraIcon, MapPinIcon, TrashIcon } from "../../../Components/Icons";
// import { fonts } from "../../../assets/fonts/fonts";
// import { Container } from "../../../Components/Container";

// const BottomTabs = createBottomTabNavigator();

// export const CreatePost = ({ navigation }) => {
//   return (
//     <Container>
//       <View style={styles.postContainer}>
//         <View style={styles.postImg}>
//           <TouchableOpacity style={styles.postImgAdd} activeOpacity={0.5}>
//             <CameraIcon style={styles.cameraIcon} size={24} />
//           </TouchableOpacity>
//         </View>
//         <Text style={styles.postImgText}>Add photo</Text>
//         <View style={styles.postForm}>
//           <TextInput
//             style={styles.postName}
//             placeholder='Title...'
//             placeholderTextColor='#BDBDBD'
//           />
//           <View style={{ justifyContent: "center" }}>
//             <TextInput
//               style={{ ...styles.postName, paddingLeft: 28 }}
//               placeholder='Location'
//               placeholderTextColor='#BDBDBD'
//             />
//             <MapPinIcon style={{ position: "absolute", bottom: 17 }} />
//           </View>

//           <TouchableOpacity style={styles.postButton} activeOpacity={0.5}>
//             <Text style={styles.postButtonText}>Publicate</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </Container>
//   );
// };

// export const CreatePostsScreen = ({ navigation }) => {
//   const [isShowKeyboard, setIsShowKeyboard] = useState(false);

//   const handlerTrash = () => {
//     setIsShowKeyboard(false);
//   };

//   return (
//     <BottomTabs.Navigator
//       screenOptions={{
//         tabBarShowLabel: false,
//         tabBarStyle: {
//           height: 80,
//           borderBottomColor: "#E8E8E8",
//           borderBottomWidth: 2,
//         },
//       }}
//     >
//       <BottomTabs.Screen
//         options={{
//           tabBarIcon: () => {
//             return (
//               <TouchableOpacity
//                 onPress={handlerTrash}
//                 style={styles.trashButton}
//                 activeOpacity={0.5}
//               >
//                 <EvilIcons name='trash' size={24} color='#BDBDBD' />
//               </TouchableOpacity>
//             );
//           },
//           tabBarStyle: {
//             height: 80,
//             borderTop: "none",
//           },
//           headerLeft: () => (
//             <TouchableOpacity
//               style={styles.logoutButton}
//               activeOpacity={0.5}
//               onPress={() => navigation.navigate("Home", { screen: "Posts" })}
//             >
//               <Ionicons name='arrow-back-sharp' size={24} color='black' />
//             </TouchableOpacity>
//           ),
//           headerLeftContainerStyle: { paddingLeft: 10 },
//           headerTitleAlign: "center",
//           headerTitleStyle: { paddingBottom: 5 },
//         }}
//         name='Create post'
//         component={CreatePost}
//       />
//     </BottomTabs.Navigator>
//   );
// };

// const styles = StyleSheet.create({
//   trashButton: {
//     backgroundColor: "#F6F6F6",
//     height: 40,
//     width: 70,
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 20,
//   },
//   postContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#fff",
//     paddingHorizontal: 16,
//     paddingTop: 32,
//   },
//   cameraIcon: {
//     alignSelf: "center",
//   },
//   iconBox: {
//     width: 60,
//     height: 60,
//     backgroundColor: "#FFFFFF",
//     borderRadius: 50,
//     position: "absolute",
//     left: "40%",
//     top: "38%",
//     justifyContent: "center",
//   },
//   postImg: {
//     width: "100%",
//     height: 240,
//     backgroundColor: "#F6F6F6",
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: "#E8E8E8",
//     marginBottom: 8,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   postImgAdd: {
//     width: 24,
//     height: 24,
//     borderRadius: 100,
//     color: "#FFFFFF",
//   },
//   postImgText: {
//     alignItems: "flex-start",
//     fontFamily: fonts.roboto400,
//     fontSize: 16,
//     color: "#BDBDBD",
//   },
//   postForm: {
//     flex: 3,
//   },
//   postButton: {
//     backgroundColor: "#F6F6F6",
//     height: 50,
//     width: 343,
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 100,
//     marginTop: 44,
//   },
//   postButtonText: {
//     fontWeight: "400",
//     fontFamily: fonts.roboto400,
//     fontSize: 16,
//     color: "#BDBDBD",
//   },
//   postName: {
//     width: 343,
//     height: 50,

//     marginTop: 33,
//     padding: 16,
//     fontStyle: "normal",
//     fontWeight: "400",
//     fontSize: 16,
//     lineHeight: 19,
//     borderBottomColor: "#E8E8E8",
//     borderBottomWidth: 1,
//     fontFamily: fonts.roboto400,
//     fontSize: 16,
//   },
// });

import React, { useState } from "react";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Text,
  TextInput,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Container } from "../../../Components/Container";
import { CameraIcon, MapPinIcon, TrashIcon } from "../../../Components/Icons";
import { MainButton, TrashButton } from "../../../Components/Buttons";
import { fonts } from "../../../assets/fonts/fonts";

const initialStatePosts = {
  name: "",
  location: "",
  photo: "",
};

const initialStateFocus = {
  name: false,
  location: false,
};

export const CreatePostsScreen = ({ navigation }) => {
  const [isFocus, setIsFocus] = useState(initialStateFocus);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [posts, setPosts] = useState(initialStatePosts);
  const [photoPost, setPhotoPost] = useState(null);

  const handlerAddPhotoPost = () => {
    setPhotoPost("../../../assets/image/forest.jpg");
  };

  const handlerFocus = (input) => {
    setIsShowKeyboard(true);
    setIsFocus((prevState) => ({
      ...prevState,
      [input]: true,
    }));
  };

  const handlerEndEditing = (input) => {
    setIsShowKeyboard(false);
    setIsFocus((prevState) => ({
      ...prevState,
      [input]: false,
    }));
  };

  const deviceHeight = Dimensions.get("window").height;

  const handlerSubmit = () => {
    setIsShowKeyboard(false);
    setPosts(initialStatePosts);

    navigation.navigate("Comments");
  };

  const handlerTrash = () => {
    setIsShowKeyboard(false);
  };

  return (
    <Container>
      <View
        style={{
          paddingHorizontal: 16,
          paddingTop: 32,
        }}
      >
        <View style={styles.imageBox}>
          <View style={styles.iconBox}>
            <CameraIcon style={styles.cameraIcon} />
          </View>
        </View>
        <Text style={styles.textStyle}>Download photo</Text>
        <TextInput
          value={posts.name}
          onChangeText={(value) =>
            setPosts((prevState) => ({ ...prevState, name: value }))
          }
          onFocus={() => handlerFocus("name")}
          onEndEditing={() => handlerEndEditing("name")}
          placeholder='Name...'
          placeholderTextColor='#BDBDBD'
          style={{
            ...styles.inputPost,
            marginBottom: 16,
            borderColor: isFocus.name ? "#FF6C00" : "#E8E8E8",
            backgroundColor: isFocus.name ? "#F6F6F6" : "#FFFFFF",
          }}
        />
        <View style={{ justifyContent: "center" }}>
          <TextInput
            value={posts.location}
            onChangeText={(value) =>
              setPosts((prevState) => ({ ...prevState, location: value }))
            }
            onFocus={() => handlerFocus("location")}
            onEndEditing={() => handlerEndEditing("location")}
            placeholder='Location...'
            placeholderTextColor='#BDBDBD'
            style={{
              ...styles.inputPost,
              marginBottom: 32,
              paddingLeft: 28,
              borderColor: isFocus.location ? "#FF6C00" : "#E8E8E8",
              backgroundColor: isFocus.location ? "#F6F6F6" : "#FFFFFF",
            }}
          />
          <MapPinIcon style={{ position: "absolute", bottom: "55%" }} />
        </View>
        <MainButton
          text={"Publish"}
          onPress={handlerSubmit}
          style={{ marginBottom: deviceHeight < 1000 ? 40 : 120 }}
        />
        <TrashButton onPress={handlerTrash}>
          <TrashIcon />
        </TrashButton>
      </View>
    </Container>
  );
};

// const BottomTabs = createBottomTabNavigator();

// export const CreatePostsScreen = ({ navigation }) => {
//   return (
//     <BottomTabs.Navigator
//       screenOptions={{
//         tabBarShowLabel: false,
//         tabBarStyle: {
//           height: 80,
//           borderBottomColor: "#E8E8E8",
//           borderBottomWidth: 2,
//         },
//       }}
//     >
//       <BottomTabs.Screen
//         options={{
//           tabBarStyle: {
//             height: 80,
//             borderTop: "none",
//           },
//           headerLeft: () => (
//             <TouchableOpacity
//               style={styles.logoutButton}
//               activeOpacity={0.5}
//               onPress={() => navigation.navigate("Home", { screen: "Posts" })}
//             >
//               <Ionicons name='arrow-back-sharp' size={24} color='black' />
//             </TouchableOpacity>
//           ),
//           headerLeftContainerStyle: { paddingLeft: 10 },
//           headerTitleAlign: "center",
//           headerTitleStyle: { paddingBottom: 5 },
//         }}
//         name='Create post'
//         component={CreatePost}
//       />
//     </BottomTabs.Navigator>
//   );
// };

export const styles = StyleSheet.create({
  imageBox: {
    width: "100%",
    height: 240,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    marginBottom: 8,
  },
  textStyle: {
    fontFamily: fonts.roboto400,
    fontSize: 16,
    lineHeight: 18.75,
    color: "#BDBDBD",
  },
  iconBox: {
    width: 60,
    height: 60,
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    position: "absolute",
    left: "40%",
    top: "38%",
    justifyContent: "center",
  },
  cameraIcon: {
    alignSelf: "center",
  },
  inputPost: {
    height: 50,
    borderBottomWidth: 1,
    color: "#212121",
    fontFamily: fonts.roboto400,
    fontSize: 16,
    lineHeight: 18.75,
  },
});
