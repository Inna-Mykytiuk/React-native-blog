import React, { useState } from "react";
import { fonts } from "../../../assets/fonts/fonts";
import { MainButton } from "../../../Components/Buttons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  StatusBar,
  // Alert,
  // SafeAreaView,
} from "react-native";
import { Container } from "../../../Components/Container";

const initialStateUser = {
  email: "",
  password: "",
};

const LoginScreen = () => {
  const navigation = useNavigation();

  const [user, setUser] = useState(initialStateUser);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [show, setShow] = useState(false);

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
    if (user.email !== "" && user.password !== "") {
      console.log(user.email, user.password);
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
          style={{ ...styles.form, paddingBottom: isShowKeyboard ? 79 : 130 }}
        >
          <Text style={styles.title}>Sign in</Text>
          <TextInput
            style={{
              ...styles.input,
              marginBottom: 10,
              borderColor: isFocus.email ? "#FF6C00" : "#E8E8E8",
              backgroundColor: isFocus.email ? "#FFFFFF" : "#F6F6F6",
            }}
            placeholder='Enter email'
            placeholderTextColor='#BDBDBD'
            textContentType='emailAddress'
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
            text={"Sign in"}
          />
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("Registration")}
          >
            Don't have an account? Sign up
          </Text>
        </View>
        <StatusBar barStyle='light-content' />
      </ImageBackground>
    </Container>
  );
};

export default LoginScreen;

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
    marginTop: 32,
    marginBottom: 32,
  },
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
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
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
});
