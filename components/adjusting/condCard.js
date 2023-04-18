import { useState } from "react";
import * as Font from "expo-font";

import { StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";

import MainColor from "../mainColor/mainColor";

const CondCard = (props) => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const loadFonts = async () => {
    await Font.loadAsync({
      "SF-Pro-Display-RegularItalic": require("../../assets/fonts/sf-pro/SF-Pro-Display-RegularItalic.otf"),
    });
    setFontLoaded(true);
  };

  if (!fontLoaded) {
    loadFonts();
    return null;
  }

  return (
    <View style={styles.condCard}>
      <MainColor style={{ borderRadius: 60 }}>
        <View style={styles.cardImage}>
          <MaterialCommunityIcons name={props.icon} size={44} color="white" />
        </View>
      </MainColor>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.value}>
        {props.value}
        {props.unit}
      </Text>
    </View>
  );
};

export default CondCard;

const styles = StyleSheet.create({
  condCard: {
    width: 154,
    height: 174,
    justifyContent: "center",
    alignItems: "center",
    gap: 9,
    backgroundColor: "#F4F7FB",
    borderRadius: 22,
    shadowColor: "#3B4056",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.15,
  },
  cardImage: {
    width: 60,
    height: 60,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "SF-Pro-Display-RegularItalic",
    fontSize: 20,
    textAlign: "center",
    color: "#000",
    opacity: 0.7,
  },
  value: {
    fontFamily: "SF-Pro-Display-RegularItalic",
    fontSize: 20,
    textAlign: "center",
    color: "#000",
    opacity: 0.4,
  },
});
