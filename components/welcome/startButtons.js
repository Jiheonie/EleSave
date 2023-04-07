import { useState } from "react";
import * as Font from "expo-font";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const StartButtons = (props) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      "HKGrotesk-Bold": require("../../assets/fonts/hk-grotesk/HKGrotesk-Bold.otf"),
    });
    setFontLoaded(true);
  };

  if (!fontLoaded) {
    loadFonts();
    return null;
  }

  return (
    <View style={styles.buttons}>
      {/* <LinearGradient colors={['#985EE1', '#F25656']}> */}
      <TouchableOpacity style={styles.joinButton} onPress={props.onStartJoin}>
        <Text style={styles.joinText}>Join</Text>
      </TouchableOpacity>
      {/* </LinearGradient> */}
      <TouchableOpacity style={styles.loginButton} onPress={props.onStartLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StartButtons;

const styles = StyleSheet.create({
  buttons: {
    gap: 10,
  },
  joinButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 113,
    backgroundColor: "#1A1A1A",
    borderRadius: 16,
  },
  joinText: {
    fontFamily: "HKGrotesk-Bold",
    fontSize: 16,
    textAlign: "center",
    color: "#FFFFFF",
  },
  loginButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 113,
    backgroundColor: "#1A1A1A",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#8E8E8E",
    borderRadius: 16,
  },
  loginText: {
    width: 165,
    fontFamily: "HKGrotesk-Bold",
    fontSize: 16,
    textAlign: "center",
    color: "#FFFFFF",
  },
});
