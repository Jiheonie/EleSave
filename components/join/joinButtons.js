import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import * as Font from "expo-font";

const contentWidth = Dimensions.get("window").width;
const buttonsWidth = contentWidth * 0.93 * 0.88;

const JoinButtons = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      "HKGrotesk-Bold": require("../../assets/fonts/hk-grotesk/HKGrotesk-Bold.otf"),
      "HKGrotesk-Regular": require("../../assets/fonts/hk-grotesk/HKGrotesk-Regular.otf"),
    });
    setFontLoaded(true);
  };

  if (!fontLoaded) {
    loadFonts();
    return null;
  }

  return (
    <View style={styles.joinButtons}>
      <TouchableOpacity style={styles.joinMember}>
        <Text style={styles.joinMemberText}>Join</Text>
      </TouchableOpacity>
      <Text style={styles.ORText}>OR</Text>
      <TouchableOpacity style={styles.joinMedia}>
        <Image
          source={require("../../assets/joinIcon/apple-logo.png")}
          style={styles.joinIcon}
        />
        <Text style={styles.joinMediaText}>Continue with Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.joinMedia}>
        <Image
          source={require("../../assets/joinIcon/google.png")}
          style={styles.joinIcon}
        />
        <Text style={styles.joinMediaText}>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.joinMedia}>
        <Image
          source={require("../../assets/joinIcon/facebook.png")}
          style={styles.joinIcon}
        />
        <Text style={styles.joinMediaText}>Continue with Facebook</Text>
      </TouchableOpacity>
    </View>
  );
};

export default JoinButtons;

const styles = StyleSheet.create({
  joinButtons: {
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    width: buttonsWidth,
  },
  joinMember: {
    justifyContent: "center",
    alignContent: "center",
    paddingVertical: 18,
    width: buttonsWidth,
    borderRadius: 16,
    backgroundColor: "#000000",
  },
  joinMemberText: {
    height: 19,
    fontFamily: "HKGrotesk-Bold",
    fontSize: 16,
    textAlign: "center",
    color: "#FFFFFF",
  },
  ORText: {
    height: 14,
    fontFamily: "HKGrotesk-Regular",
    fontSize: 12,
    textAlign: "center",
    color: "#000000",
  },
  joinMedia: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    width: buttonsWidth,
    paddingVertical: 18,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E4E8E9",
    borderRadius: 32,
  },
  joinIcon: {
    width: 16,
    height: 16,
  },
  joinMediaText: {
    height: 19,
    fontFamily: "HKGrotesk-Bold",
    fontSize: 16,
    textAlign: "center",
    color: "#000000",
  },
});
