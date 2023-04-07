import { Dimensions, View, Modal, StyleSheet, ScrollView } from "react-native";
import DropShadow from "react-native-drop-shadow";

import JoinUpBar from "./joinUpBar";
import JoinContent from "./joinContent";
import JoinFooter from "./joinFooter";

const windowHeight = Dimensions.get("window").height;

const Join = (props) => {
  return (
    <Modal animationType="slide">
      <DropShadow style={styles.modalDropShadow}>
        <ScrollView alwaysBounceVertical={false}>
          <View style={styles.joinModal}>
            <JoinUpBar onCancel={props.onEndJoin} />
            <JoinContent onLogin={props.onLogin} />
            <JoinFooter />
          </View>
        </ScrollView>
      </DropShadow>
    </Modal>
  );
};

export default Join;

const styles = StyleSheet.create({
  modalDropShadow: {
    shadowColor: "#00000040",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
  },
  joinModal: {
    height: 870,
    width: "100%",
    top: windowHeight - 870,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#00000033",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    alignItems: "center",
  },
});
