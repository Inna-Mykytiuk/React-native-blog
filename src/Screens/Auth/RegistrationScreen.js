import React, { useState, useEffect } from "react";
import { fonts } from "../../../assets/fonts/fonts";
import { AddAvatarIcon, RemoveAvatarIcon } from "../../../Components/Icons";
import { AddAvatarButton, MainButton } from "../../../Components/Buttons";
// import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Image,
  StatusBar,
  // Alert,
} from "react-native";
import { Container } from "../../../Components/Container";

const initialStateUser = {
  email: "",
  password: "",
  login: "",
  avatar: "",
};

const RegistrationScreen = () => {
  const navigation = useNavigation();

  const [show, setShow] = useState(false);
  const [user, setUser] = useState(initialStateUser);
  const [userPhoto, setUserPhoto] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const handlerAddAvatar = () => {
    setUserPhoto(require("../../../assets/image/avatar.png"));
  };

  useEffect(() => {
    setUser((prevState) => ({ ...prevState, avatar: userPhoto }));
  }, [userPhoto]);

  const handlerFocus = (input) => {
    setIsShowKeyboard(true);
    setIsFocus({
      ...isFocus,
      [input]: true,
    });
  };

  const handlerEndEditing = (input) => {
    setIsShowKeyboard(false);
    setIsFocus({
      ...isFocus,
      [input]: false,
    });
  };

  const handlerSubmit = () => {
    setIsShowKeyboard(false);
    if (user.login !== "" && user.email !== "" && user.password !== "") {
      console.log(user.login, user.email, user.password);
      setUser(initialStateUser);
      navigation.navigate("Home", {
        screen: "Posts",
        user,
      });
    }
  };

  return (
    <Container>
      <ImageBackground
        source={require("../../../assets/image/photo_bg.png")}
        style={styles.backImage}
      >
        <View
          style={{ ...styles.form, paddingBottom: isShowKeyboard ? 79 : 129 }}
        >
          {!userPhoto ? (
            <View
              style={{
                ...styles.boxAvatar,
                backgroundColor: "#F6F6F6",
                transform: [{ translateX: 50 }],
              }}
            >
              <AddAvatarButton onPress={handlerAddAvatar}>
                {/* <Ionicons name='add-circle-outline' size={30} color='#FF6C00' /> */}
                <AddAvatarIcon />
              </AddAvatarButton>
            </View>
          ) : (
            <View
              style={{
                ...styles.boxAvatar,
                transform: [{ translateX: 50 }],
              }}
            >
              <Image source={require("../../../assets/image/avatar.png")} />
              <AddAvatarButton onPress={() => setUserPhoto("")}>
                {/* <Ionicons
                  name='close-circle-outline'
                  size={30}
                  color='#BDBDBD'
                /> */}
                <RemoveAvatarIcon />
              </AddAvatarButton>
            </View>
          )}
          <Text style={styles.title}>Registration</Text>
          <TextInput
            style={{
              ...styles.input,
              marginBottom: 10,
              borderColor: isFocus.login ? "#FF6C00" : "#E8E8E8",
              backgroundColor: isFocus.login ? "#FFFFFF" : "#F6F6F6",
            }}
            placeholder='Login'
            placeholderTextColor='#BDBDBD'
            textContentType='login'
            value={user.login}
            onFocus={() => handlerFocus("login")}
            onChangeText={(value) =>
              setUser((prevState) => ({ ...prevState, login: value }))
            }
            onEndEditing={() => handlerEndEditing("login")}
          />
          <TextInput
            style={{
              ...styles.input,
              marginBottom: 10,
              borderColor: isFocus.email ? "#FF6C00" : "#E8E8E8",
              backgroundColor: isFocus.email ? "#FFFFFF" : "#F6F6F6",
            }}
            placeholder='E-mail'
            placeholderTextColor='#BDBDBD'
            textContentType='email'
            value={user.email}
            onFocus={() => handlerFocus("email")}
            onChangeText={(value) =>
              setUser((prevState) => ({ ...prevState, email: value }))
            }
            onEndEditing={() => handlerEndEditing("email")}
          />
          <View style={{ ...styles.wrapperInput, marginBottom: 43 }}>
            <TextInput
              value={user.password}
              onChangeText={(value) =>
                setUser((prevState) => ({ ...prevState, password: value }))
              }
              onFocus={() => handlerFocus("password")}
              onEndEditing={() => handlerEndEditing("password")}
              placeholder='Password'
              placeholderTextColor='#BDBDBD'
              secureTextEntry={show ? false : true}
              style={{
                ...styles.input,
                borderColor: isFocus.password ? "#FF6C00" : "#E8E8E8",
                backgroundColor: isFocus.password ? "#FFFFFF" : "#F6F6F6",
              }}
            />
            <Text
              style={styles.buttonShowPassword}
              onPress={() => setShow(!show)}
            >
              {show ? (
                <Feather name='eye' size={22} color='grey' />
              ) : (
                <Feather name='eye-off' size={22} color='#BDBDBD' />
              )}
            </Text>
          </View>
          <MainButton
            style={styles.button}
            onPress={handlerSubmit}
            text={"Sign up"}
          />
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("Login")}
          >
            Already have an account? Sign in
          </Text>
        </View>
        <StatusBar barStyle='light-content' />
      </ImageBackground>
    </Container>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    color: "#212121",
    textAlign: "center",
    fontFamily: fonts.roboto700,
    fontSize: 30,
    marginTop: 92,
    marginBottom: 32,
  },
  // icon: {
  //   margin: 0,
  //   padding: 0,
  //   textAlign: "center",
  //   alignSelf: "center",
  // },
  input: {
    height: 50,
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: "solid",
    color: "#212121",
    fontFamily: fonts.roboto400,
    fontSize: 16,
    lineHeight: 18.75,
  },
  link: {
    color: "#1B4371",
    fontFamily: fonts.roboto400,
    fontSize: 16,
    lineHeight: 18.75,
    textAlign: "center",
    alignItems: "flex-end",
  },
  backImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  backImagePhoto: {
    position: "absolute",
    top: -50,
    width: 120,
    height: 120,
    borderRadius: 25,
    alignSelf: "center",
    marginBottom: 32,
    backgroundColor: "#F6F6F6",
  },
  form: {
    position: "relative",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: "#FF6C00",
    color: "#FFFFFF",
    height: 51,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "grey",
    shadowOpacity: 0.05,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 8,
    elevation: 5,
  },
  addBtnProfPicture: {
    position: "absolute",
    top: 30,

    right: 109,
    width: 25,
    height: 25,
    alignSelf: "center",
  },
  wrapperInput: { position: "relative" },
  buttonShowPassword: {
    position: "absolute",
    top: 15,
    right: 16,
    fontSize: 16,
    lineHeight: 18.75,
    color: "#1B4371",
  },
  boxAvatar: {
    position: "absolute",
    width: 120,
    height: 120,
    top: -60,
    right: "50%",
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  button: {
    backgroundColor: "#FF6C00",
    color: "#FFFFFF",
    height: 51,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "grey",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    elevation: 5,
  },
});
