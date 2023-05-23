import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
const backImage = require("../../../assets/image/photo_bg.png");
import { AddAvatarIcon, RemoveAvatarIcon } from "../../../Components/Icons";
import { Feather } from "@expo/vector-icons";
import { AddAvatarButton, MainButton } from "../../../Components/Buttons";

export const RegistrationScreen = ({ navigation }) => {
  const [login, setLogin] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [userPhoto, setUserPhoto] = useState(null);
  const [show, setShow] = useState(false);

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const handleLogin = (text) => {
    setLogin(text);
  };

  const handleMail = (text) => {
    setMail(text);
  };
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handlePassword = (text) => {
    setPassword(text);
  };

  const handlerAddAvatar = () => {
    setUserPhoto(require("../../../assets/image/avatar.png"));
  };

  const register = () => {
    setIsShowKeyboard(false);
    if (!login || !mail || !password) {
      alert("Enter all data pleace!!!");
      return;
    }
    if (!validateEmail(mail)) {
      alert("Invalid email address!");
      return;
    }

    setLogin("");
    setMail("");
    setPassword("");

    navigation.navigate("Home", { screen: "PostsScreen" });
  };

  const passwShow = () => alert(`Your password is: ${password}`);

  return (
    <View style={styles.maincontainer}>
      <ImageBackground source={backImage} style={styles.backImg}>
        <View style={{ ...styles.container, paddingBottom: 68 }}>
          <View style={styles.pfotoContainer}>
            {!userPhoto ? (
              <View>
                <AddAvatarButton onPress={handlerAddAvatar}>
                  <AddAvatarIcon />
                </AddAvatarButton>
              </View>
            ) : (
              <View>
                <ImageBackground
                  source={require("../../../assets/image/avatar.png")}
                  style={{ width: "100%", height: "100%" }}
                />
                <AddAvatarButton onPress={() => setUserPhoto("")}>
                  <RemoveAvatarIcon />
                </AddAvatarButton>
              </View>
            )}
          </View>
          <Text style={styles.title}>Registration</Text>

          <TextInput
            style={styles.inputLogin}
            placeholder='Login'
            inputMode='text'
            value={login}
            onChangeText={handleLogin}
            onFocus={() => setIsShowKeyboard(true)}
            placeholderTextColor='#BDBDBD'
          />
          <TextInput
            style={styles.inputMailPassw}
            placeholder='Email address'
            inputMode='email'
            value={mail}
            onChangeText={handleMail}
            onFocus={() => setIsShowKeyboard(true)}
            placeholderTextColor='#BDBDBD'
          />
          <TextInput
            style={styles.inputMailPassw}
            placeholder='Password'
            secureTextEntry={show ? false : true}
            value={password}
            onChangeText={handlePassword}
            onFocus={() => setIsShowKeyboard(true)}
            placeholderTextColor='#BDBDBD'
          />

          <TouchableOpacity
            style={styles.passwShow}
            activeOpacity={0.5}
            onPress={passwShow}
          >
            <Text style={styles.passwShowText} onPress={() => setShow(!show)}>
              {show ? (
                <Feather name='eye' size={22} color='grey' />
              ) : (
                <Feather name='eye-off' size={22} color='#BDBDBD' />
              )}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.registerButton}
            activeOpacity={0.5}
            onPress={register}
          >
            <Text style={styles.registerButtonText}>Sign up</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.loginLink}
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.loginLinkText}>
              Already have an account? Log in
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <StatusBar style='auto' />
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    alignItems: "center",
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
  backImg: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
  },
  container: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    width: "100%",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  containerKeyB: {
    justifyContent: "flex-end",
  },
  pfotoContainer: {
    marginTop: -60,
    height: 120,
    width: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },

  addbutton: {
    marginTop: "65%",
    left: "90%",
    height: 25,
    width: 25,
    pointerEvents: "auto",
    shadowColor: "grey",
  },
  title: {
    fontWeight: "500",
    fontSize: 30,
    marginTop: 32,
    lineHeight: 35,
  },
  inputLogin: {
    backgroundColor: "#F6F6F6",
    width: 343,
    height: 50,
    borderRadius: 8,
    marginTop: 33,
    padding: 16,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
  },
  inputMailPassw: {
    backgroundColor: "#F6F6F6",
    width: 343,
    height: 50,
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    position: "relative",
  },
  passwShowText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
  },
  passwShow: {
    top: -34,
    left: 130,
  },
  registerButton: {
    backgroundColor: "#FF6C00",
    height: 50,
    width: 343,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginTop: 44,
    shadowColor: "grey",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    elevation: 5,
  },
  registerButtonText: {
    color: "#fff",
    fontWeight: "400",
    fontSize: 16,
  },
  loginLink: {
    marginTop: 16,
    marginBottom: 66,
  },
  loginLinkText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
  },
});
