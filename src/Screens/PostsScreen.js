import React from "react";
import { View, Text, Image } from "react-native";
import { Container } from "../../Components/Container";
import { fonts } from "../../assets/fonts/fonts";

export const PostsScreen = () => {
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
          source={require("../../assets/image/avatar.png")}
          style={{ width: 60, height: 60 }}
        />
        <View style={{ marginLeft: 8 }}>
          <Text style={{ fontFamily: fonts.roboto700 }}>Natali Romanova</Text>
          <Text>email@example.com</Text>
        </View>
      </View>
    </Container>
  );
};
