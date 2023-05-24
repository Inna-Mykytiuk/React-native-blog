import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { fonts } from "../assets/fonts/fonts";

export const MainButton = ({ text, onPress, style, isFieldsFilled }) => {
  const buttonColor = isFieldsFilled ? "#FF6C00" : "#F6F6F6";
  const textColor = isFieldsFilled ? "#FFFFFF" : "#BDBDBD";
  const marginBottom = isFieldsFilled ? 120 : 16;

  return (
    <TouchableOpacity
      style={{
        ...styles.authBtn,
        backgroundColor: buttonColor,
        marginBottom: marginBottom,
        ...style,
      }}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text
        style={{
          ...styles.textButton,
          color: textColor,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export const AddAvatarButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.buttonAddAvatar}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {children}
    </TouchableOpacity>
  );
};

export const AddComentButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.buttonAddComment}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {children}
    </TouchableOpacity>
  );
};

export const TrashButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.trashButton}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  authBtn: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    padding: 0,
    marginBottom: 16,

    shadowColor: "grey",
    shadowOpacity: 0.05,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 8,
    elevation: 5,
  },
  textButton: {
    color: "#ffffff",
    fontFamily: fonts.roboto400,
    textAlign: "center",
    fontSize: 16,
    paddingVertical: 16,
  },
  buttonAddAvatar: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 70,
    left: 107,
    width: 25,
    height: 25,
    borderRadius: 100,
    backgroundColor: "#ffffff",
  },
  trashButton: {
    width: 70,
    height: 40,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  buttonAddComment: {
    position: "absolute",
    bottom: 8,
    right: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    width: 34,
    height: 34,
  },
});
