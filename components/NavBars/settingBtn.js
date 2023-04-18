import { StyleSheet, TouchableOpacity, View } from "react-native";
import { AntDesign } from "react-native-vector-icons";

const SettingBtn = () => {
  return (
    <TouchableOpacity style={styles.settingBtn}>
      <View style={[styles.btnFrame, styles.settingShadow]}>
        <AntDesign name="setting" size={20} color="#000" />
      </View>
    </TouchableOpacity>
  );
};

export default SettingBtn;

const styles = StyleSheet.create({
  settingBtn: {
    position: "absolute",
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    padding: 9,
    opacity: 0.8,
  },
  btnFrame: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#DBE0E7",
  },
  settingShadow: {
    shadowColor: "#3b4056",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
});
