// import {
//   StyleSheet,
//   Text,
//   ImageBackground,
//   View,
//   TouchableOpacity,
//   TextInput,
// } from "react-native";
// import React, { useState } from "react";
// import { StatusBar } from "expo-status-bar";
// const backImage = require("../../../assets/image/photo_bg.png");
// import { Feather } from "@expo/vector-icons";
// import { Container } from "../../../Components/Container";

// export const LoginScreen = ({ navigation }) => {
//   const [mail, setMail] = useState("");
//   const [password, setPassword] = useState("");
//   const [show, setShow] = useState(false);
//   const [isFocus, setIsFocus] = useState("");
//   const [isShowKeyboard, setIsShowKeyboard] = useState(false);

//   const handlerFocus = (input) => {
//     setIsShowKeyboard(true);
//     setIsFocus({
//       ...isFocus,
//       [input]: true,
//     });
//   };

//   const handlerEndEditing = (input) => {
//     setIsShowKeyboard(false);
//     setIsFocus({
//       ...isFocus,
//       [input]: false,
//     });
//   };

//   const handleMail = (text) => {
//     setMail(text);
//   };
//   const handlePassword = (text) => {
//     setPassword(text);
//   };

//   const register = () => {
//     setIsShowKeyboard(false);
//     if (!mail || !password) {
//       alert("Enter all data please!!!");
//       return;
//     }
//     navigation.navigate("Home", { screen: "Posts" });
//   };

//   const passwShow = () => alert(`Your password is: ${password}`);

//   return (
//     <Container>
//       <ImageBackground source={backImage} style={styles.backImage}>
//         <View
//           style={{
//             ...styles.container,
//             paddingBottom: isShowKeyboard ? 79 : 129,
//           }}
//         >
//           <Text style={styles.title}>Login</Text>
//           <TextInput
//             style={styles.inputMailPassw}
//             placeholder='Email address'
//             inputMode='email'
//             value={mail}
//             onChangeText={handleMail}
//             onFocus={() => handlerFocus("email")}
//             onEndEditing={() => handlerEndEditing("email")}
//           />
//           <TextInput
//             style={styles.inputMailPassw}
//             placeholder='Password'
//             secureTextEntry={show ? false : true}
//             value={password}
//             onChangeText={handlePassword}
//             onFocus={() => handlerFocus("password")}
//             onEndEditing={() => handlerEndEditing("password")}
//           />
//           <TouchableOpacity
//             style={styles.passwShow}
//             activeOpacity={0.5}
//             onPress={passwShow}
//           >
//             <Text style={styles.passwShowText} onPress={() => setShow(!show)}>
//               {show ? (
//                 <Feather name='eye' size={22} color='grey' />
//               ) : (
//                 <Feather name='eye-off' size={22} color='#BDBDBD' />
//               )}
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.registerButton}
//             activeOpacity={0.5}
//             onPress={register}
//           >
//             <Text style={styles.registerButtonText}>Login</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.loginLink}
//             activeOpacity={0.5}
//             onPress={() => navigation.navigate("Registration")}
//           >
//             <Text style={styles.loginLinkText}>
//               Don't have an account? Sign up
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </ImageBackground>
//       <StatusBar style='auto' />
//     </Container>
//   );
// };

import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
const backImage = require("../../../assets/image/photo_bg.png");
import { Feather } from "@expo/vector-icons";
import { Container } from "../../../Components/Container";

export const LoginScreen = ({ navigation }) => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

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

  const register = () => {
    setIsShowKeyboard(false);
    if (!mail || !password) {
      alert("Enter all data please!!!");
      return;
    }
    if (!validateEmail(mail)) {
      alert("Invalid email address!");
      return;
    }

    setMail("");
    setPassword("");
    navigation.navigate("Home", { screen: "Posts" });
  };

  const passwShow = () => alert(`Your password is: ${password}`);

  return (
    <Container>
      <ImageBackground source={backImage} style={styles.backImage}>
        <View
          style={{
            ...styles.container,
            paddingBottom: isShowKeyboard ? 79 : 129,
          }}
        >
          <Text style={styles.title}>Login</Text>
          <TextInput
            style={styles.inputMailPassw}
            placeholder='Email address'
            inputMode='email'
            value={mail}
            onChangeText={handleMail}
            onFocus={() => setIsShowKeyboard(true)}
          />
          <TextInput
            style={styles.inputMailPassw}
            placeholder='Password'
            secureTextEntry={show ? false : true}
            value={password}
            onChangeText={handlePassword}
            onFocus={() => setIsShowKeyboard(true)}
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
            <Text style={styles.registerButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginLink}
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Registration")}
          >
            <Text style={styles.loginLinkText}>
              Don't have an account? Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <StatusBar style='auto' />
    </Container>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    alignItems: "center",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    textAlign: "center",
  },
  backImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  container: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    width: "100%",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingBottom: "10%",
  },
  containerKeyB: {
    justifyContent: "flex-end",
  },
  title: {
    fontWeight: "500",
    fontSize: 30,
    marginTop: 32,
    lineHeight: 35,
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
