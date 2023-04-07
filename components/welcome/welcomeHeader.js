import { useState } from "react";
import * as Font from "expo-font";
import { StyleSheet, View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import MaskedView from "@react-native-community/masked-view";

const WelcomeHeader = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      "HKGrotesk-Bold": require("../../assets/fonts/hk-grotesk/HKGrotesk-Bold.otf"),
      "HKGrotesk-Medium": require("../../assets/fonts/hk-grotesk/HKGrotesk-Medium.otf"),
    });
    setFontLoaded(true);
  };

  if (!fontLoaded) {
    loadFonts();
    return null;
  }

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>EleSave</Text>
      <Text style={styles.slogan}>Upload in the highest quality</Text>
    </View>
  );
};

export default WelcomeHeader;

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    width: 256,
    height: 128,
    position: "absolute",
    top: 116,
  },
  title: {
    width: 112,
    height: 42,
    fontFamily: "HKGrotesk-Bold",
    fontSize: 32,
    lineHeight: 42,
    textAlign: "center",
  },
  slogan: {
    width: 257,
    height: 84,
    fontFamily: "HKGrotesk-Medium",
    fontSize: 32,
    lineHeight: 42,
    textAlign: "center",
    color: "#000000",
    flex: 0,
    flexGrow: 1,
  },
});
