import { useState } from "react";
import * as Font from "expo-font";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "react-native-vector-icons";

const contentWidth = Dimensions.get("window").width;
const footerWidth = contentWidth * 0.93 * 0.88;

const JoinFooter = () => {
  const [checkColor, setCheckColor] = useState("#00000040");
  const [fontLoaded, setFontLoaded] = useState(false);

  const pressCheck = () => {
    if (checkColor === "#00000040") setCheckColor("#CA1919");
    else setCheckColor("#00000040");
  };

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
    <View style={styles.joinFooter}>
      <Pressable onPress={pressCheck}>
        <MaterialIcons name="check-circle" size={30} color={checkColor} />
      </Pressable>
      <Text style={styles.agreeText}>
        I agree to receive newsletters and product updates from EleSave.
      </Text>
    </View>
  );
};

export default JoinFooter;

const styles = StyleSheet.create({
  joinFooter: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 9,
    position: "absolute",
    width: footerWidth,
    top: 735,
  },
  agreeText: {
    fontFamily: "HKGrotesk-Medium",
    fontSize: 14,
    lineHeight: 18,
    color: "#BDBDBD",
  },
});
