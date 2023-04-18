import { useState } from "react";
import { StyleSheet, View } from "react-native";
import AdjustPicker from "./adjustPicker";
import AdjustPannel from "./adjustPannel";
import ModeSwitch from "./modeSwitch";

const AdjustRemote = (props) => {
  // const [isManual, setIsManual] = useState(true);

  return (
    <View style={styles.adjustRemoteContainer}>
      <AdjustPicker />
      <AdjustPannel />
      <ModeSwitch />
    </View>
  );
};

export default AdjustRemote;

const styles = StyleSheet.create({
  adjustRemoteContainer: {
    justifyContent: "space-between",
    gap: 23,
  },
});
