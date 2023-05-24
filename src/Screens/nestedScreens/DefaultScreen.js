import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { Container } from "../../../Components/Container";
import { fonts } from "../../../assets/fonts/fonts";

export const DefaultScreenPosts = ({ route }) => {
  const [posts, setPosts] = useState([]);
  // console.log("route.params", route.params);

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
                marginTop: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={{ uri: item.photo }}
                style={{ width: 350, height: 240 }}
              />
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
