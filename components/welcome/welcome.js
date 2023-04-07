import { StyleSheet, View } from "react-native";

import WelcomeHeader from "./welcomeHeader";
import StartActivities from "./startActivities";
import Join from "../join/join";
import Login from "../login/login";
import { useState } from "react";

const Welcome = () => {
  const [joinModalIsVisible, setJoinModalIsVisible] = useState(false);
  const [loginModalIsVisible, setLoginModalIsVisible] = useState(false);

  const startJoin = () => {
    setJoinModalIsVisible(true);
  };

  const endJoin = () => {
    setJoinModalIsVisible(false);
  };

  const startLogin = () => {
    setLoginModalIsVisible(true);
    setJoinModalIsVisible(false);
  };

  const endLogin = () => {
    setLoginModalIsVisible(false);
  };

  return (
    <View style={styles.welcomeContainer}>
      <WelcomeHeader />
      <StartActivities onStartJoin={startJoin} onStartLogin={startLogin} />
      {joinModalIsVisible && <Join onEndJoin={endJoin} onLogin={startLogin} />}
      {loginModalIsVisible && <Login onEndLogin={endLogin} />}
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  welcomeContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
  },
});
