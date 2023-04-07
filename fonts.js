import * as Font from "expo-font";

const loadFonts = async () => {
  await Font.loadAsync({
    "HKGrotesk-Bold": require("./assets/fonts/hk-grotesk/HKGrotesk-Bold.otf"),
    "HKGrotesk-Medium": require("./assets/fonts/hk-grotesk/HKGrotesk-Medium.otf"),
  });
};

export default loadFonts;
