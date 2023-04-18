import { useState } from "react";
import * as Font from "expo-font";
import { Text, View, StyleSheet } from "react-native";

import MainColor from "../mainColor/mainColor";

const WeatherWidget = () => {
  const [temps, setTemps] = useState(32)

  const [fontLoaded, setFontLoaded] = useState(false);
  const loadFonts = async () => {
    await Font.loadAsync({
      "SF-Pro-Display-Bold": require("../../assets/fonts/sf-pro/SF-Pro-Display-Bold.otf"),
      "SF-Pro-Display-Regular": require("../../assets/fonts/sf-pro/SF-Pro-Display-Regular.otf"),
      "SF-Pro-Display-RegularItalic": require("../../assets/fonts/sf-pro/SF-Pro-Display-RegularItalic.otf"),
    });
    setFontLoaded(true);
  };

  if (!fontLoaded) {
    loadFonts();
    return null;
  }

  return (
    <MainColor style={styles.weatherWidgetContainer}>
      <View style={styles.locationFrame}>
        <Text style={styles.locationTitle}>My Location</Text>
        <Text style={styles.city}>Ho Chi Minh</Text>
      </View>
      <View style={styles.tempsFrame}>
        <Text style={styles.temps}>{temps}°C</Text>
      </View>
    </MainColor>
  );
};

export default WeatherWidget;

const styles = StyleSheet.create({
  weatherWidgetContainer: {
    width: '100%',
    borderRadius: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 110,
  },
  locationFrame: {
    padding: 10,
  },
  locationTitle: {
    fontFamily: "SF-Pro-Display-Bold",
    fontSize: 22,
    color: "#FFF"
  },
  city: {
    fontFamily: "SF-Pro-Display-Regular",
    fontSize: 13, 
    color: "#FFF",
    opacity: 0.6
  },
  tempsFrame: {
    justifyContent: "center",
    paddingRight: 25,
  },
  temps: {
    fontFamily: "SF-Pro-Display-RegularItalic",
    fontSize: 48,
    color: "#FFF"
  }
});
