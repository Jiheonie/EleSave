import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import * as Font from "expo-font";

import JoinForms from "./joinForms";
import JoinButtons from "./joinButtons";

const JoinContent = (props) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      "HKGrotesk-Regular": require("../../assets/fonts/hk-grotesk/HKGrotesk-Regular.otf"),
    });
    setFontLoaded(true);
  };

  if (!fontLoaded) {
    loadFonts();
    return null;
  }

  return (
    <View style={styles.joinContent}>
      <JoinForms />
      <JoinButtons />
      <View style={{ flexDirection: "row", gap: 5 }}>
        <Text style={styles.haveAccount}>Have an account?</Text>
        <TouchableOpacity onPress={props.onLogin}>
          <Text style={[styles.haveAccount, { color: "#CA1919" }]}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default JoinContent;

const styles = StyleSheet.create({
  joinContent: {
    justifyContent: "space-between",
    alignItems: "center",
    gap: 24,
    position: "absolute",
    top: 128,
    width: "88%",
  },
  haveAccount: {
    height: 17,
    fontFamily: "HKGrotesk-Regular",
    fontSize: 14,
    textAlign: "center",
    color: "#BDBDBD",
  },
});
