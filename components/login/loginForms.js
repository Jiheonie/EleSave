import { useState } from "react";
import * as Font from "expo-font";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "react-native-vector-icons";

const LoginForms = () => {
  const [passIsVisible, setPassIsVisible] = useState(false);
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

  const togglePasswordVisibility = () => {
    setPassIsVisible(!passIsVisible);
  };

  return (
    <View style={styles.LoginFormsContainer}>
      <Text style={styles.accInfoText}>Account Information</Text>
      <TextInput
        style={styles.loginInput}
        placeholder="Email or phone Number"
      />
      <View style={styles.passInput}>
        <TextInput
          style={styles.loginInput}
          secureTextEntry={!passIsVisible}
          placeholder="Password"
        />
        <Pressable onPress={togglePasswordVisibility}>
          <MaterialIcons
            name={passIsVisible ? "visibility" : "visibility-off"}
            size={24}
            color="#50555F"
          />
        </Pressable>
      </View>
      <Text style={styles.forgotPass}>Forgot your password?</Text>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.LoginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginForms;

const styles = StyleSheet.create({
  LoginFormsContainer: {
    alignItems: "flex-start",
    gap: 13,
    width: "100%",
  },
  accInfoText: {
    fontFamily: "HKGrotesk-Bold",
    fontSize: 12,
    lineHeight: 16,
    textTransform: "uppercase",
    color: "#50555F",
  },
  loginInput: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingLeft: 16,
    paddingRight: 32,
    gap: 10,
    backgroundColor: "#E3E5E8",
    borderRadius: 4,
    fontFamily: "HKGrotesk-Medium",
    fontSize: 16,
    lineHeight: 21,
    color: "#767E8B",
  },
  passInput: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 35,
    backgroundColor: "#E3E5E8",
    borderRadius: 4,
  },
  forgotPass: {
    fontFamily: "HKGrotesk-Medium",
    fontSize: 12,
    lineHeight: 16,
    textAlign: "center",
    color: "#CA1919",
  },
  loginBtn: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 113,
    paddingVertical: 18,
    backgroundColor: "#000000",
    alignSelf: "stretch",
    width: "100%",
    borderRadius: 20,
  },
  LoginText: {
    fontFamily: "HKGrotesk-Bold",
    fontSize: 13,
    textAlign: "center",
    color: "#FFFFFF",
  },
});
