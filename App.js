import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Welcome from "./components/welcome/welcome";

const App = () => {
  return (
    <View style={styles.appContainer}>
      <Welcome />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
