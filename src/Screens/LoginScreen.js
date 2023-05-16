import React, { useState } from "react";
import { fonts } from "../../assets/fonts/fonts";

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Image,
  TouchableOpacity,
  StatusBar,
  Alert,
  // SafeAreaView,
} from "react-native";
import { Container } from "../../Components/Container";

const initialStateUser = {
  email: "",
  password: "",
  username: "",
};

const Login = () => {
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

  // const handlerSubmit = () => {
  //   if (email !== "" && password !== "") {
  //     // signInWithEmailAndPassword(auth, email, password)
  //     console.log(email, password);
  //     // .then(() => console.log("Login success"))
  //     // .catch((err) => Alert.alert("Login error", err.message));
  //   }
  // };

  // const handlerSubmit = () => {
  //   // setIsShowKeyboard(false);
  //   // setUser(initialStateUser);
  // };

  const handlerSubmit = () => {
    setIsShowKeyboard(false);
    if (user.username !== "" && user.email !== "" && user.password !== "") {
      console.log(user.username, user.email, user.password);
      setUser(initialStateUser);
    }
  };

  return (
    <Container>
      <ImageBackground
        source={require("../../assets/image/photo_bg.png")}
        style={styles.backImage}
      >
        <View
          style={{ ...styles.form, paddingBottom: isShowKeyboard ? 79 : 129 }}
        >
          {/* <Image
            source={require("../../assets/profilePhoto.png")}
            style={styles.backImagePhoto}
          /> */}
          <View style={styles.backImagePhoto} />
          <TouchableOpacity>
            <Image
              source={require("../../assets/image/ellipse1.png")}
              style={styles.addBtnProfPicture}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Sign in</Text>
          <TextInput
            style={{
              ...styles.input,
              marginBottom: 10,
              borderColor: isFocus.username ? "#FF6C00" : "#E8E8E8",
              backgroundColor: isFocus.username ? "#FFFFFF" : "#F6F6F6",
            }}
            placeholder='Enter username'
            placeholderTextColor='#BDBDBD'
            textContentType='username'
            value={user.username}
            onFocus={() => handlerFocus("username")}
            onChangeText={(value) =>
              setUser((prevState) => ({ ...prevState, username: value }))
            }
            onEndEditing={() => handlerEndEditing("username")}
          />
          <TextInput
            style={{
              ...styles.input,
              marginBottom: 10,
              borderColor: isFocus.password ? "#FF6C00" : "#E8E8E8",
              backgroundColor: isFocus.password ? "#FFFFFF" : "#F6F6F6",
            }}
            placeholder='Enter email'
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
              {show ? "Hide" : "Show"}
            </Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={handlerSubmit}>
            <Text style={{ fontWeight: "normal", color: "#fff", fontSize: 16 }}>
              {" "}
              Sign in
            </Text>
          </TouchableOpacity>
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <Text
              style={{
                color: "#1B4371",
                fontWeight: "400",
                fontSize: 16,
              }}
            >
              Don't have an account?{" "}
            </Text>
            <TouchableOpacity
              style={{ margin: 0 }}
              onPress={() => navigation.navigate("Registration screen")}
            >
              <Text
                style={{
                  color: "#FF6C00",
                  fontWeight: "400",
                  fontSize: 14,
                }}
              >
                {" "}
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <StatusBar barStyle='light-content' />
      </ImageBackground>
    </Container>
  );
};

export default Login;

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
