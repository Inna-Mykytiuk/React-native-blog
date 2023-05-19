// import React, { useState, useEffect } from "react";
// import { fonts } from "../../../assets/fonts/fonts";
// import { AddAvatarIcon, RemoveAvatarIcon } from "../../../Components/Icons";
// import { AddAvatarButton, MainButton } from "../../../Components/Buttons";
// // import { Ionicons } from "@expo/vector-icons";
// import { Feather } from "@expo/vector-icons";
// // import { useNavigation } from "@react-navigation/native";

// import {
//   StyleSheet,
//   Text,
//   View,
//   ImageBackground,
//   TextInput,
//   Image,
//   StatusBar,
//   // Alert,
// } from "react-native";
// import { Container } from "../../../Components/Container";

// const initialStateUser = {
//   email: "",
//   password: "",
//   login: "",
//   avatar: "",
// };

// export const RegistrationScreen = ({ navigation }) => {
//   const [show, setShow] = useState(false);
//   const [user, setUser] = useState(initialStateUser);
//   const [userPhoto, setUserPhoto] = useState(null);
//   const [isFocus, setIsFocus] = useState(false);
//   const [isShowKeyboard, setIsShowKeyboard] = useState(false);

//   const handlerAddAvatar = () => {
//     setUserPhoto(require("../../../assets/image/avatar.png"));
//   };

//   useEffect(() => {
//     setUser((prevState) => ({ ...prevState, avatar: userPhoto }));
//   }, [userPhoto]);

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

//   const handlerSubmit = () => {
//     setIsShowKeyboard(false);
//     if (user.login !== "" && user.email !== "" && user.password !== "") {
//       console.log(user.login, user.email, user.password);
//       setUser(initialStateUser);
//       navigation.navigate("Home", {
//         screen: "Posts",
//         user,
//       });
//     }
//   };

//   return (
//     <Container>
//       <ImageBackground
//         source={require("../../../assets/image/photo_bg.png")}
//         style={styles.backImage}
//       >
//         <View
//           style={{ ...styles.form, paddingBottom: isShowKeyboard ? 79 : 129 }}
//         >
//           {!userPhoto ? (
//             <View
//               style={{
//                 ...styles.boxAvatar,
//                 backgroundColor: "#F6F6F6",
//                 transform: [{ translateX: 50 }],
//               }}
//             >
//               <AddAvatarButton onPress={handlerAddAvatar}>
//                 {/* <Ionicons name='add-circle-outline' size={30} color='#FF6C00' /> */}
//                 <AddAvatarIcon />
//               </AddAvatarButton>
//             </View>
//           ) : (
//             <View
//               style={{
//                 ...styles.boxAvatar,
//                 transform: [{ translateX: 50 }],
//               }}
//             >
//               <Image source={require("../../../assets/image/avatar.png")} />
//               <AddAvatarButton onPress={() => setUserPhoto("")}>
//                 {/* <Ionicons
//                   name='close-circle-outline'
//                   size={30}
//                   color='#BDBDBD'
//                 /> */}
//                 <RemoveAvatarIcon />
//               </AddAvatarButton>
//             </View>
//           )}
//           <Text style={styles.title}>Registration</Text>
//           <TextInput
//             style={{
//               ...styles.input,
//               marginBottom: 10,
//               borderColor: isFocus.login ? "#FF6C00" : "#E8E8E8",
//               backgroundColor: isFocus.login ? "#FFFFFF" : "#F6F6F6",
//             }}
//             placeholder='Login'
//             placeholderTextColor='#BDBDBD'
//             textContentType='login'
//             value={user.login}
//             onFocus={() => handlerFocus("login")}
//             onChangeText={(value) =>
//               setUser((prevState) => ({ ...prevState, login: value }))
//             }
//             onEndEditing={() => handlerEndEditing("login")}
//           />
//           <TextInput
//             style={{
//               ...styles.input,
//               marginBottom: 10,
//               borderColor: isFocus.email ? "#FF6C00" : "#E8E8E8",
//               backgroundColor: isFocus.email ? "#FFFFFF" : "#F6F6F6",
//             }}
//             placeholder='E-mail'
//             placeholderTextColor='#BDBDBD'
//             textContentType='email'
//             value={user.email}
//             onFocus={() => handlerFocus("email")}
//             onChangeText={(value) =>
//               setUser((prevState) => ({ ...prevState, email: value }))
//             }
//             onEndEditing={() => handlerEndEditing("email")}
//           />
//           <View style={{ ...styles.wrapperInput, marginBottom: 43 }}>
//             <TextInput
//               value={user.password}
//               onChangeText={(value) =>
//                 setUser((prevState) => ({ ...prevState, password: value }))
//               }
//               onFocus={() => handlerFocus("password")}
//               onEndEditing={() => handlerEndEditing("password")}
//               placeholder='Password'
//               placeholderTextColor='#BDBDBD'
//               secureTextEntry={show ? false : true}
//               style={{
//                 ...styles.input,
//                 borderColor: isFocus.password ? "#FF6C00" : "#E8E8E8",
//                 backgroundColor: isFocus.password ? "#FFFFFF" : "#F6F6F6",
//               }}
//             />
//             <Text
//               style={styles.buttonShowPassword}
//               onPress={() => setShow(!show)}
//             >
//               {show ? (
//                 <Feather name='eye' size={22} color='grey' />
//               ) : (
//                 <Feather name='eye-off' size={22} color='#BDBDBD' />
//               )}
//             </Text>
//           </View>
//           <MainButton
//             style={styles.button}
//             onPress={handlerSubmit}
//             text={"Sign up"}
//           />
//           <Text
//             style={styles.link}
//             onPress={() => navigation.navigate("Login")}
//           >
//             Already have an account? Sign in
//           </Text>
//         </View>
//         <StatusBar barStyle='light-content' />
//       </ImageBackground>
//     </Container>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   title: {
//     color: "#212121",
//     textAlign: "center",
//     fontFamily: fonts.roboto700,
//     fontSize: 30,
//     marginTop: 92,
//     marginBottom: 32,
//   },
//   input: {
//     height: 50,
//     padding: 16,
//     borderWidth: 1,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderStyle: "solid",
//     color: "#212121",
//     fontFamily: fonts.roboto400,
//     fontSize: 16,
//     lineHeight: 18.75,
//   },
//   link: {
//     color: "#1B4371",
//     fontFamily: fonts.roboto400,
//     fontSize: 16,
//     lineHeight: 18.75,
//     textAlign: "center",
//     alignItems: "flex-end",
//   },
//   backImage: {
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "flex-end",
//   },
//   backImagePhoto: {
//     position: "absolute",
//     top: -50,
//     width: 120,
//     height: 120,
//     borderRadius: 25,
//     alignSelf: "center",
//     marginBottom: 32,
//     backgroundColor: "#F6F6F6",
//   },
//   form: {
//     position: "relative",
//     backgroundColor: "#FFFFFF",
//     borderTopLeftRadius: 25,
//     borderTopRightRadius: 25,
//     paddingHorizontal: 16,
//   },
//   button: {
//     backgroundColor: "#FF6C00",
//     color: "#FFFFFF",
//     height: 51,
//     borderRadius: 100,
//     justifyContent: "center",
//     alignItems: "center",
//     shadowColor: "grey",
//     shadowOpacity: 0.05,
//     shadowOffset: {
//       width: 0,
//       height: 0,
//     },
//     shadowRadius: 8,
//     elevation: 5,
//   },
//   addBtnProfPicture: {
//     position: "absolute",
//     top: 30,

//     right: 109,
//     width: 25,
//     height: 25,
//     alignSelf: "center",
//   },
//   wrapperInput: { position: "relative" },
//   buttonShowPassword: {
//     position: "absolute",
//     top: 15,
//     right: 16,
//     fontSize: 16,
//     lineHeight: 18.75,
//     color: "#1B4371",
//   },
//   boxAvatar: {
//     position: "absolute",
//     width: 120,
//     height: 120,
//     top: -60,
//     right: "50%",
//     borderRadius: 16,
//     backgroundColor: "#F6F6F6",
//   },
//   button: {
//     backgroundColor: "#FF6C00",
//     color: "#FFFFFF",
//     height: 51,
//     borderRadius: 100,
//     justifyContent: "center",
//     alignItems: "center",
//     shadowColor: "grey",
//     shadowOpacity: 1,
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowRadius: 10,
//     elevation: 5,
//   },
// });

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
import { AddAvatarIcon, RemoveAvatarIcon } from "../../../Components/Icons";
import { Feather } from "@expo/vector-icons";
import { AddAvatarButton, MainButton } from "../../../Components/Buttons";

export const RegistrationScreen = ({ navigation }) => {
  const [login, setLogin] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [userPhoto, setUserPhoto] = useState(null);
  const [show, setShow] = useState(false);

  const handleLogin = (text) => {
    setLogin(text);
  };
  const handleMail = (text) => {
    setMail(text);
  };
  const handlePassword = (text) => {
    setPassword(text);
  };

  const handlerAddAvatar = () => {
    setUserPhoto(require("../../../assets/image/avatar.png"));
  };

  const register = () => {
    if (!login || !mail || !password) {
      alert("Enter all data pleace!!!");
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
        <View style={styles.container}>
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
            placeholderTextColor='#BDBDBD'
          />
          <TextInput
            style={styles.inputMailPassw}
            placeholder='Email address'
            inputMode='email'
            value={mail}
            onChangeText={handleMail}
            placeholderTextColor='#BDBDBD'
          />
          <TextInput
            style={styles.inputMailPassw}
            placeholder='Password'
            secureTextEntry={show ? false : true}
            value={password}
            onChangeText={handlePassword}
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
