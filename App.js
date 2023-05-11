import { StyleSheet, View } from "react-native";

import Welcome from "./screens/welcomeScreen";
import Adjusting from "./screens/adjustingScreen";
import { useState, createContext, useEffect, useMemo } from "react";

import Device from "./class/device";
import Home from "./screens/homeScreen";
import AuthContextProvider from "./store/authContext";

import AIO_account from "./constances/adafruit";

export const AppContext = createContext();

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdjusting, setIsAdjusting] = useState(false);

  const [devices, setDevices] = useState([
    new Device("quat", "Fan 1", "Fan 1", "Fan"),
    new Device("quat", "Fan 2", "Fan 2", "Fan"),
    new Device("den", "Light 1", "Light 1", "Light"),
    new Device("den", "Light 2", "Light 2", "Light"),
  ]);

  const [pickedDevice, setPickedDevice] = useState({});

  const [selectedSegment, setSelectedSegment] = useState("Light");

  const [peopleCount, setPeopleCount] = useState(0);

  useEffect(() => {
    console.log("App Log: devices");
  }, [devices]);

  useEffect(() => {
    for (let device of devices) {
      device.setNumOfPeople(peopleCount);
      if (!device.isManual) {
        if (device.numOfPeople === 0) device.setPower(0);
        else device.setPower(50);
      }
    }
    console.log(pickedDevice.power);
  }, [peopleCount]);

  useEffect(() => {
    const mqtt = require("precompiled-mqtt");
    const client = mqtt.connect("mqtts://io.adafruit.com/", {
      username: AIO_account.username,
      password: AIO_account.key,
    });

    const feedTopic = "nghiachutuan68/feeds/so-nguoi";

    client.on("connect", () => {
      console.log("MQTT Connected!");

      client.subscribe(feedTopic, { qos: 1 }, (err) => {
        if (err) {
          console.error("Failed to subscribe to feed:", err);
        } else {
          console.log("Subscribed to feed successfully!");
        }
      });
    });

    client.on("message", (topic, message) => {
      console.log("Received message:", message.toString());
      let pCount = parseInt(message.toString());
      setPeopleCount(pCount);
    });
  }, []);

  if (!isLogged) {
    screen = <Welcome />;
  } else {
    screen = !isAdjusting ? <Home /> : <Adjusting />;
  }

  const contextValue = useMemo(
    () => ({
      setIsLogged,
      selectedSegment,
      setSelectedSegment,
      devices,
      setDevices,
      pickedDevice,
      setPickedDevice,
      setIsAdjusting,
    }),
    [devices, selectedSegment, pickedDevice]
  );

  return (
    <AuthContextProvider>
      <AppContext.Provider value={contextValue}>
        <View style={styles.appContainer}>{screen}</View>
      </AppContext.Provider>
    </AuthContextProvider>
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
