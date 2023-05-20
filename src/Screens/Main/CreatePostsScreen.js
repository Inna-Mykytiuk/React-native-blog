import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";
import React from "react";
import { EvilIcons, Ionicons, FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// const trashImg = require("./trash.png");
import { CameraIcon, MapPinIcon, TrashIcon } from "../../../Components/Icons";
import { fonts } from "../../../assets/fonts/fonts";
import { Container } from "../../../Components/Container";

const BottomTabs = createBottomTabNavigator();

export const CreatePost = ({ navigation }) => {
  return (
    <Container>
      <View style={styles.postContainer}>
        <View style={styles.postImg}>
          <TouchableOpacity style={styles.postImgAdd} activeOpacity={0.5}>
            {/* <FontAwesome
              name='camera'
              size={24}
              color='black'
              style={styles.cameraIcon}
            /> */}
            <CameraIcon style={styles.cameraIcon} size={24} />
          </TouchableOpacity>
        </View>
        <Text style={styles.postImgText}>Add photo</Text>
        <View style={styles.postForm}>
          <TextInput
            style={styles.postName}
            placeholder='Title...'
            placeholderTextColor='#BDBDBD'
          />
          <View style={{ justifyContent: "center" }}>
            <TextInput
              style={{ ...styles.postName, paddingLeft: 28 }}
              placeholder='Location'
              placeholderTextColor='#BDBDBD'
            />
            <MapPinIcon style={{ position: "absolute", bottom: 17 }} />
          </View>

          <TouchableOpacity style={styles.postButton} activeOpacity={0.5}>
            <Text style={styles.postButtonText}>Publicate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export const CreatePostsScreen = ({ navigation }) => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,
          borderBottomColor: "#E8E8E8",
          borderBottomWidth: 2,
        },
      }}
    >
      <BottomTabs.Screen
        options={{
          tabBarIcon: () => {
            return (
              <TouchableOpacity style={styles.trashButton} activeOpacity={0.5}>
                <EvilIcons name='trash' size={24} color='#BDBDBD' />
              </TouchableOpacity>
            );
          },
          tabBarStyle: {
            height: 80,
            borderTop: "none",
          },
          headerLeft: () => (
            <TouchableOpacity
              style={styles.logoutButton}
              activeOpacity={0.5}
              onPress={() => navigation.navigate("Home", { screen: "Posts" })}
            >
              <Ionicons name='arrow-back-sharp' size={24} color='black' />
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: { paddingLeft: 10 },
          headerTitleAlign: "center",
          headerTitleStyle: { paddingBottom: 5 },
        }}
        name='Create post'
        component={CreatePost}
      />
    </BottomTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  trashButton: {
    backgroundColor: "#F6F6F6",
    height: 40,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  postContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  cameraIcon: {
    alignSelf: "center",
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
  postImg: {
    width: "100%",
    height: 240,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    marginBottom: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  postImgAdd: {
    width: 24,
    height: 24,
    borderRadius: 100,
    color: "#FFFFFF",
  },
  postImgText: {
    alignItems: "flex-start",
    fontFamily: fonts.roboto400,
    fontSize: 16,
    color: "#BDBDBD",
  },
  postForm: {
    flex: 3,
  },
  postButton: {
    backgroundColor: "#F6F6F6",
    height: 50,
    width: 343,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginTop: 44,
  },
  postButtonText: {
    fontWeight: "400",
    fontFamily: fonts.roboto400,
    fontSize: 16,
    color: "#BDBDBD",
  },
  postName: {
    width: 343,
    height: 50,

    marginTop: 33,
    padding: 16,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    fontFamily: fonts.roboto400,
    fontSize: 16,
  },
});
