// import React, { useState } from "react";
// import { fonts } from "../../../assets/fonts/fonts";
// import { MainButton } from "../../../Components/Buttons";
// import { Feather } from "@expo/vector-icons";
// // import { useNavigation } from "@react-navigation/native";

// import {
//   StyleSheet,
//   Text,
//   View,
//   ImageBackground,
//   TextInput,
//   StatusBar,
//   // Alert,
//   // SafeAreaView,
// } from "react-native";
// import { Container } from "../../../Components/Container";

// // const initialStateUser = {
// //   email: "",
// //   password: "",
// // };

// const LoginScreen = ({ navigation }) => {
//   // const [user, setUser] = useState(initialStateUser);
//   // const [isShowKeyboard, setIsShowKeyboard] = useState(false);
//   // const [isFocus, setIsFocus] = useState(false);
//   const [show, setShow] = useState(false);

//   // const handlerFocus = (input) => {
//   //   setIsShowKeyboard(true);
//   //   setIsFocus({
//   //     ...isFocus,
//   //     [input]: true,
//   //   });
//   // };

//   // const handlerEndEditing = (input) => {
//   //   setIsShowKeyboard(false);
//   //   setIsFocus({
//   //     ...isFocus,
//   //     [input]: false,
//   //   });
//   // };

//   const [mail, setMail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleMail = (text) => {
//     setMail(text);
//   };
//   const handlePassword = (text) => {
//     setPassword(text);
//   };

//   const register = () => {
//     if (!mail || !password) {
//       alert("Enter all data pleace!!!");
//       return;
//     }
//     navigation.navigate("Home", { screen: "PostsScreen" });
//   };

//   const passwShow = () => alert(`Your password is: ${password}`);

//   // const handlerSubmit = () => {
//   //   setIsShowKeyboard(false);
//   //   if (user.email !== "" && user.password !== "") {
//   //     console.log(user.email, user.password);
//   //     setUser(initialStateUser);
//   //     navigation.navigate("Home", {
//   //       screen: "Posts",
//   //       user,
//   //     });
//   //   }
//   // };

//   return (
//     <Container>
//       <ImageBackground
//         source={require("../../../assets/image/photo_bg.png")}
//         style={styles.backImage}
//       >
//         <View
//           style={{ ...styles.form, paddingBottom: isShowKeyboard ? 79 : 130 }}
//         >
//           <Text style={styles.title}>Login</Text>
//           <TextInput
//             style={{
//               ...styles.input,
//               marginBottom: 10,
//               borderColor: isFocus.email ? "#FF6C00" : "#E8E8E8",
//               backgroundColor: isFocus.email ? "#FFFFFF" : "#F6F6F6",
//             }}
//             placeholder='Enter email'
//             placeholderTextColor='#BDBDBD'
//             textContentType='mailAddress'
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
//             text={"Sign in"}
//           />
//           <Text
//             style={styles.link}
//             onPress={() => navigation.navigate("Registration")}
//           >
//             Don't have an account? Sign up
//           </Text>
//         </View>
//         <StatusBar barStyle='light-content' />
//       </ImageBackground>
//     </Container>
//   );
// };

// export default LoginScreen;

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
//     marginTop: 32,
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
//     shadowOpacity: 1,
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowRadius: 10,
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
import { Feather } from "@expo/vector-icons";
import { Container } from "../../../Components/Container";

export const LoginScreen = ({ navigation }) => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleMail = (text) => {
    setMail(text);
  };
  const handlePassword = (text) => {
    setPassword(text);
  };

  const register = () => {
    if (!mail || !password) {
      alert("Enter all data please!!!");
      return;
    }
    navigation.navigate("Home", { screen: "PostsScreen" });
  };

  const passwShow = () => alert(`Your password is: ${password}`);

  return (
    <Container>
      <ImageBackground source={backImage} style={styles.backImage}>
        <View style={styles.container}>
          <Text style={styles.title}>Login</Text>
          <TextInput
            style={styles.inputMailPassw}
            placeholder='Email address'
            inputMode='email'
            value={mail}
            onChangeText={handleMail}
          />
          <TextInput
            style={styles.inputMailPassw}
            placeholder='Password'
            secureTextEntry={show ? false : true}
            value={password}
            onChangeText={handlePassword}
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

export default LoginScreen;
