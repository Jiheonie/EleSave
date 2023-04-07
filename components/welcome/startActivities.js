import { useState } from "react";
import * as Font from "expo-font";
import { StyleSheet, View, Text } from "react-native";

import StartButtons from "./startButtons";

const StartActivities = (props) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      "HKGrotesk-Medium": require("../../assets/fonts/hk-grotesk/HKGrotesk-Medium.otf"),
    });
    setFontLoaded(true);
  };

  if (!fontLoaded) {
    loadFonts();
    return null;
  }

  return (
    <View style={styles.actContainer}>
      <StartButtons
        onStartJoin={props.onStartJoin}
        onStartLogin={props.onStartLogin}
      />
      <Text style={styles.termsText}>
        By joining EleSave, you agreed to our{" "}
        <Text style={{ color: "#CA1919" }}>Terms of service</Text> and{" "}
        <Text style={{ color: "#CA1919" }}>Privacy policy</Text>
      </Text>
    </View>
  );
};

export default StartActivities;

styles = StyleSheet.create({
  actContainer: {
    position: "absolute",
    gap: 24,
    top: 628,
    alignItems: "center",
    justifyContent: "space-between",
  },
  termsText: {
    width: 300,
    fontFamily: "HKGrotesk-Medium",
    fontSize: 12,
    textAlign: "center",
    color: "#000000",
  },
});
