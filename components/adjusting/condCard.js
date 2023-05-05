import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";

import MainColor from "../mainColor/mainColor";
import FontText from "../fontText/fontText";

const CondCard = (props) => {

  return (
    <View style={styles.condCard}>
      <MainColor style={{ borderRadius: 60 }}>
        <View style={styles.cardImage}>
          <MaterialCommunityIcons name={props.icon} size={44} color="white" />
        </View>
      </MainColor>
      <FontText font="SF-Pro-Display-RegularItalic" style={styles.title}>{props.title}</FontText>
      <FontText font="SF-Pro-Display-RegularItalic" style={styles.value}>
        {props.value}
        {props.unit}
      </FontText>
    </View>
  );
};

export default CondCard;

const styles = StyleSheet.create({
  condCard: {
    width: 154,
    height: 174,
    justifyContent: "center",
    alignItems: "center",
    gap: 9,
    backgroundColor: "#F4F7FB",
    borderRadius: 22,
    shadowColor: "#3B4056",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.15,
  },
  cardImage: {
    width: 60,
    height: 60,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    color: "#000",
    opacity: 0.7,
  },
  value: {
    fontSize: 20,
    textAlign: "center",
    color: "#000",
    opacity: 0.4,
  },
});
