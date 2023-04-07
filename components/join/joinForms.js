import { Dimensions, StyleSheet, View, TextInput } from "react-native";
import { useState } from "react";
import * as Font from "expo-font";

const contentWidth = Dimensions.get('window').width
const formWidth = contentWidth * 0.93 * 0.88;

const JoinForms = () => {
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
    <View style={styles.joinForms}>
      <TextInput style={styles.joinInput} placeholder="Name" />
      <TextInput style={styles.joinInput} placeholder="Email Address" />
      <TextInput style={styles.joinInput} placeholder="Password" />
    </View>
  );
};

export default JoinForms;

const styles = StyleSheet.create({
  joinForms: {
    alignItems: "flex-start",
    gap: 12,
    width: formWidth,
  },
  joinInput: {
    alignItems: "flex-start",
    width: "100%",
    height: 31,
    borderBottomColor: "#F1F1F1",
    borderBottomWidth: 1,
    borderStyle: "solid",
    alignSelf: "stretch",
    fontFamily: 'HKGrotesk-Regular',
    fontSize: 16,
  },
});
