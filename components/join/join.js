import { Dimensions, View, Modal, StyleSheet, ScrollView } from "react-native";

import JoinUpBar from "./joinUpBar";
import JoinContent from "./joinContent";
import JoinFooter from "./joinFooter";
import { createContext, useState } from "react";
import User from "../../class/user";

const windowHeight = Dimensions.get("window").height;

export const JoinContext = createContext();

const Join = (props) => {
  const [newUser, setNewUser] = useState(new User());

  return (
    <JoinContext.Provider value={{ newUser, setNewUser }}>
      <Modal animationType="slide">
        <View style={styles.modalDropShadow}>
          <ScrollView alwaysBounceVertical={false}>
            <View style={styles.joinModal}>
              <JoinUpBar onCancel={props.onEndJoin} />
              <JoinContent onLogin={props.onLogin} />
              <JoinFooter />
            </View>
          </ScrollView>
        </View>
      </Modal>
    </JoinContext.Provider>
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
