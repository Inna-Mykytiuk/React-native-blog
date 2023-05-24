import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Container } from "../../../Components/Container";
import { fonts } from "../../../assets/fonts/fonts";

import {
  AddAvatarIcon,
  CommentOnIcon,
  LikeOnIcon,
  LogOutIcon,
  MapPinIcon,
  RemoveAvatarIcon,
} from "../../../Components/Icons";

export const PostsScreen = ({ route }) => {
  const [posts, setPosts] = useState([]);
  console.log("route.params", route.params);

  const userData = route.params;

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);

  return (
    <Container>
      <View
        style={{
          paddingHorizontal: 16,
          flexDirection: "row",
          paddingTop: 32,
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../../assets/image/avatar.png")}
          style={{ width: 60, height: 60 }}
        />
        <View style={{ marginLeft: 8 }}>
          <Text style={{ fontFamily: fonts.roboto700 }}>
            {userData?.user?.login || "Natali Romanova"}
          </Text>
          <Text>{userData?.user?.email || "email@example.com"}</Text>
        </View>
      </View>
      <View style={styles.container}>
        <FlatList
          data={posts}
          keyExtractor={(item, indx) => indx.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                marginBottom: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={{ uri: item.photo }}
                style={{ width: "100%", height: 240, borderRadius: 8 }}
              />
              <Text>{item.name}</Text>
              <Text>{item.location}</Text>
              {/* <View>
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
                  </View>
                  <TouchableOpacity style={{ flexDirection: "row" }}>
                    <MapPinIcon />
                    <Text style={{ marginLeft: 6 }}>{item.location}</Text>
                  </TouchableOpacity>
                </View>
              </View> */}
            </View>
          )}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
