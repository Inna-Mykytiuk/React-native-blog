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

const initStatePost = [
  {
    id: "1",
    image: "../../../assets/image/forest.jpg",
    nameLocation: "Forest",
    location: "Ukraine",
    commentsCount: 8,
    likesCount: 153,
  },
  {
    id: "2",
    image: "../../../assets/image/sunset.jpg",
    nameLocation: "Sunset on Black Sea",
    location: "Ukraine",
    commentsCount: 10,
    likesCount: 200,
  },
  {
    id: "3",
    image: "../../../assets/image/old_house.jpg",
    nameLocation: "Old house in Venice",
    location: "Italy",
    commentsCount: 50,
    likesCount: 200,
  },
];

const ProfileScreen = ({ navigation }) => {
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
          <View style={{ alignItems: "flex-end", marginTop: 22 }}>
            <LogOutIcon onPress={() => navigation.navigate("Login")} />
          </View>
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
                <View>
                  <Image
                    source={{ uri: item.image }}
                    style={{ width: "100%", height: 240, borderRadius: 8 }}
                  />
                  <Text style={{ fontSize: 16, color: "#000" }}>
                    {item.name}
                  </Text>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
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
                      >
                        <CommentOnIcon
                          onPress={() => navigation.navigate("CommentsScreen")}
                        />
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
export default ProfileScreen;

export const profileStyles = StyleSheet.create({
  imgBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
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
    marginTop: 46,
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
