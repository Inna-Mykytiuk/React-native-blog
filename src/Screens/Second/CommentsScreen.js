import React, { useState, useEffect } from "react";
import {
  FlatList,
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { fonts } from "../../../assets/fonts/fonts";
import { Container } from "../../../Components/Container";
import { AddComentButton } from "../../../Components/Buttons";
import { AddCommentIcon } from "../../../Components/Icons";
import { format } from "date-fns";

const initStateComments = [
  {
    id: "1",
    avatar: "../../../assets/image/ellipse.png",
    text: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
    date: "09 june 2020 | 08:40",
  },
  {
    id: "2",
    avatar: "../../../assets/image/ellipseN.png",
    text: "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
    date: "09 june 2020 | 09:14",
  },
  {
    id: "3",
    avatar: "../../../assets/image/ellipse.png",
    text: "Thank you! That was very helpful!",
    date: "09 june 2020 | 09:40",
  },
];

export const CommentsScreen = ({ navigation }) => {
  const [isFocus, setIsFocus] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [text, setText] = useState(null);
  const [comments, setComments] = useState(initStateComments);
  const { wrapper, dateStyle, textStyle, avatar, input, wrapperInput } = styles;

  useEffect(() => {
    navigation.getParent().setOptions({ tabBarStyle: { display: "none" } });
    return () => {
      navigation.getParent().setOptions({
        tabBarStyle: {
          display: "flex",
          height: 83,
          paddingTop: 9,
          boxShadow: "0px -0.5px 0px rgba(0, 0, 0, 0.3)",
          paddingLeft: 45,
        },
      });
    };
  });

  const handlerFocus = (input) => {
    setIsShowKeyboard(true);
    setIsFocus((prevState) => ({
      ...prevState,
      [input]: true,
    }));
  };

  const handlerEndEditing = (input) => {
    setIsShowKeyboard(false);
    setIsFocus((prevState) => ({
      ...prevState,
      [input]: false,
    }));
  };

  const handlerSubmit = () => {
    const newComment = {
      id: Date.now().toString(),
      avatar: "../../../assets/image/ellipse.png",
      text: text.trim(),
      date: format(Date.now(), "dd MMMM yyy | kk:mm"),
    };
    setComments([...comments, newComment]);
    setText("");
    Keyboard.dismiss();
  };

  return (
    <Container>
      <View
        style={{
          paddingHorizontal: 16,
          paddingTop: 32,
          paddingBottom: 100,
          marginBottom: 150,
        }}
      >
        <Image
          source={require("../../../assets/image/sunset.jpg")}
          style={{ width: "100%", height: 240, borderRadius: 8 }}
        />

        {!isShowKeyboard && (
          <FlatList
            data={comments}
            renderItem={({ item, index }) => (
              <View
                style={{
                  paddingLeft: index % 2 === 0 ? 44 : 0,
                  paddingRight: index % 2 === 0 ? 0 : 44,
                  marginTop: 24,
                }}
              >
                {index % 2 === 0 ? (
                  <Image
                    style={{
                      ...avatar,
                      alignSelf: index % 2 === 0 ? "flex-start" : "flex-end",
                    }}
                    source={require("../../../assets/image/ellipse.png")}
                  />
                ) : (
                  <Image
                    style={{
                      ...avatar,
                      alignSelf: index % 2 === 0 ? "flex-start" : "flex-end",
                    }}
                    source={require("../../../assets/image/ellipseN.png")}
                  />
                )}
                <View
                  style={{
                    ...wrapper,
                    borderTopRightRadius: index % 2 === 0 ? 8 : 0,
                    borderTopLeftRadius: index % 2 === 0 ? 0 : 8,
                  }}
                >
                  <Text style={textStyle}>{item.text}</Text>
                  <Text
                    style={{
                      ...dateStyle,
                      alignSelf: index % 2 === 0 ? "flex-end" : "flex-start",
                    }}
                  >
                    {item.date}
                  </Text>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        )}
        <View
          style={{
            ...wrapperInput,
            marginTop: 31,
          }}
        >
          <TextInput
            value={text}
            onChangeText={setText}
            onFocus={() => handlerFocus("text")}
            onEndEditing={() => handlerEndEditing("text")}
            placeholder='Add comment...'
            placeholderTextColor='#BDBDBD'
            style={{
              ...input,
              borderColor: isFocus.text ? "#FF6C00" : "#E8E8E8",
              backgroundColor: isFocus.text ? "#FFFFFF" : "#F6F6F6",
            }}
          />
          <AddComentButton onPress={handlerSubmit}>
            <AddCommentIcon />
          </AddComentButton>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 28,
    position: "absolute",
  },
  wrapper: {
    padding: 16,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  textStyle: {
    fontFamily: fonts.roboto400,
    fontSize: 13,
    lineHeight: 18,
    color: "#212121",
  },
  dateStyle: {
    fontFamily: fonts.roboto400,
    fontSize: 10,
    lineHeight: 12,
    color: "#BDBDBD",
    marginTop: 8,
  },
  input: {
    height: 50,
    padding: 16,
    borderWidth: 1,
    borderRadius: 100,
    borderWidth: 1,
    borderStyle: "solid",
    color: "#212121",
    fontFamily: fonts.roboto400,
    fontSize: 16,
    lineHeight: 18.75,
  },
  wrapperInput: { position: "relative" },
});
