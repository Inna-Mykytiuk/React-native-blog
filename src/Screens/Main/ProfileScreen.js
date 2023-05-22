import { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  AddAvatarIcon,
  CommentOnIcon,
  LikeOnIcon,
  LogOutIcon,
  MapPinIcon,
  RemoveAvatarIcon,
} from "../../../Components/Icons";
import { AddAvatarButton } from "../../../Components/Buttons";
import { Container } from "../../../Components/Container";
import { fonts } from "../../../assets/fonts/fonts";
import { Feather } from "@expo/vector-icons";

const initStatePost = [
  {
    id: "1",
    image: require("../../../assets/image/forest.jpg"),
    nameLocation: "Forest",
    location: "Ukraine",
    commentsCount: 8,
    likesCount: 153,
  },
  {
    id: "2",
    image: require("../../../assets/image/sunset.jpg"),
    nameLocation: "Sunset on Black Sea",
    location: "Ukraine",
    commentsCount: 10,
    likesCount: 200,
  },
  {
    id: "3",
    image: require("../../../assets/image/old_house.jpg"),
    nameLocation: "Old house in Venice",
    location: "Italy",
    commentsCount: 50,
    likesCount: 200,
  },
];

export const ProfileScreen = ({ navigation }) => {
  const [post, setPost] = useState(initStatePost);
  const [userPhoto, setUserPhoto] = useState(
    "../../../assets/image/avatar.png"
  );

  const handlerAddAvatar = () => {
    setUserPhoto("../../../assets/image/avatar.png");
    console.log(post);
  };

  return (
    <Container>
      <ImageBackground
        source={require("../../../assets/image/photo_bg.png")}
        style={profileStyles.imgBg}
      >
        <View style={profileStyles.form}>
          <TouchableOpacity
            style={{ alignItems: "flex-end", marginTop: 11 }}
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Login")}
          >
            <Feather name='log-out' size={24} color='#BDBDBD' />
          </TouchableOpacity>
          {userPhoto ? (
            <View
              style={{
                ...profileStyles.boxAvatar,
                transform: [{ translateX: 50 }],
              }}
            >
              <Image source={require("../../../assets/image/avatar.png")} />
              <AddAvatarButton onPress={() => setUserPhoto("")}>
                <RemoveAvatarIcon />
              </AddAvatarButton>
            </View>
          ) : (
            <View
              style={{
                ...profileStyles.boxAvatar,
                backgroundColor: "#F6F6F6",
                transform: [{ translateX: 50 }],
              }}
            >
              <AddAvatarButton onPress={handlerAddAvatar}>
                <AddAvatarIcon />
              </AddAvatarButton>
            </View>
          )}
          <Text style={profileStyles.title}>Natali Romanova</Text>
          <SafeAreaView style={{ flex: 1 }}>
            <FlatList
              data={post}
              renderItem={({ item, index }) => (
                <View style={{ paddingBottom: 40 }}>
                  <Image
                    source={item.image}
                    style={{ width: "100%", height: 240, borderRadius: 8 }}
                  />
                  <Text style={{ fontSize: 16, color: "#000" }}>
                    {item.nameLocation}
                  </Text>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      marginBottom: 32,
                    }}
                  >
                    <View
                      style={{
                        flex: 2,
                        flexDirection: "row",
                      }}
                    >
                      <TouchableOpacity
                        style={{ flexDirection: "row", marginRight: 24 }}
                        onPress={() => navigation.navigate("Comments")}
                      >
                        <CommentOnIcon />
                        <Text style={{ marginLeft: 6 }}>
                          {item.commentsCount}
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={{ flexDirection: "row" }}>
                        <LikeOnIcon />
                        <Text style={{ marginLeft: 6 }}>{item.likesCount}</Text>
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ flexDirection: "row" }}>
                      <MapPinIcon />
                      <Text style={{ marginLeft: 6 }}>{item.location}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>
        </View>
      </ImageBackground>
    </Container>
  );
};

export const profileStyles = StyleSheet.create({
  imgBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  logoutButton: {
    marginLeft: 350,
    marginTop: -40,
  },
  form: {
    flex: 1,
    width: "100%",
    position: "relative",
    top: 147,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
  },
  title: {
    color: "#212121",
    textAlign: "center",
    fontFamily: fonts.roboto700,
    fontSize: 30,
    //Замінити на 92
    marginTop: 60,
    marginBottom: 32,
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
});
