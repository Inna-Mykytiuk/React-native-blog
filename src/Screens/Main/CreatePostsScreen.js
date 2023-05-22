import React, { useState } from "react";
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
