import { useState } from "react";
import * as Font from "expo-font";
import {
  StyleSheet,
  Modal,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "react-native-vector-icons";

import LoginForms from "./loginForms";

const Login = (props) => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const loadFonts = async () => {
    await Font.loadAsync({
      "HKGrotesk-Medium": require("../../assets/fonts/hk-grotesk/HKGrotesk-Medium.otf"),
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
    <Modal animationType="fade">
      <ScrollView alwaysBounceVertical={false}>
        <View style={styles.loginContainer}>
          <View style={styles.loginContent}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={props.onEndLogin}
            >
              <MaterialIcons name="chevron-left" size={24} color="#53575E" />
              <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>
            <View style={styles.loginHeader}>
              <Text style={styles.greetingText}>Welcome back!</Text>
              <Text style={styles.extraGreetingText}>
                We’re so excited to see you again!
              </Text>
            </View>
            <LoginForms />
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginContainer: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#EFF1F5",
  },
  loginContent: {
    alignItems: "flex-start",
    gap: 32,
    position: "absolute",
    top: 56,
    width: "88%",
  },
  backButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    paddingVertical: 10,
    paddingRight: 20,
  },
  backText: {
    fontFamily: "HKGrotesk-Medium",
    fontSize: 16,
    textAlign: "center",
    color: "#53575E",
  },
  loginHeader: {
    alignItems: "center",
    gap: 8,
    width: "100%",
  },
  greetingText: {
    fontFamily: "HKGrotesk-Bold",
    fontSize: 26,
    lineHeight: 34,
    textAlign: "center",
  },
  extraGreetingText: {
    fontFamily: "HKGrotesk-Regular",
    fontSize: 13,
    lineHeight: 17,
    textAlign: "center",
    color: "#50555F",
  },
});
