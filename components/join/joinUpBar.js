import { useState } from "react";
import * as Font from "expo-font";
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";

const JoinUpBar = (props) => {
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
    <View style={styles.upBarContainer}>
      <TouchableOpacity style={styles.previousButton} onPress={props.onCancel}>
        <Image
          source={require("../../assets/joinIcon/close.png")}
          style={styles.closeIcon}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Join EleSave</Text>
    </View>
  );
};

export default JoinUpBar;

const styles = StyleSheet.create({
  upBarContainer: {
    alignItems: "flex-start",
    position: "absolute",
    width: "92%",
    top: 19,
  },
  previousButton: {
    width: 32,
    height: 32,
    backgroundColor: "#EEEEEF",
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  closeIcon: {
    height: 12,
    width: 12,
  },
  title: {
    width: "100%",
    height: 31,
    fontFamily: "HKGrotesk-Bold",
    fontSize: 24,
    textAlign: "center",
    color: "#000000",
  },
});
